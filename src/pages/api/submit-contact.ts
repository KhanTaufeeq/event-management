import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextApiRequest, NextApiResponse } from "next";
import { JWT } from "google-auth-library";

interface ContactFormData {
  name: string;
  email: string;
  eventType: string;
  phone: string;
  location: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

type RawRowData = {
  [key: string]: string | number | boolean;
};

// Extend NextApiRequest to include typed body
interface ContactApiRequest extends NextApiRequest {
  body: ContactFormData;
}

// Environment variables validation
interface EnvironmentVars {
  GOOGLE_SHEETS_SPREADSHEET_ID: string;
  GOOGLE_SHEETS_CLIENT_EMAIL: string;
  GOOGLE_SHEETS_PRIVATE_KEY: string;
}

// validate environment variables
const validateEnvVars = (): EnvironmentVars => {
  const requiredVars = [
    "GOOGLE_SHEETS_SPREADSHEET_ID",
    "GOOGLE_SHEETS_CLIENT_EMAIL",
    "GOOGLE_SHEETS_PRIVATE_KEY",
  ] as const;

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variables: ${varName}`);
    }
  }

  return {
    GOOGLE_SHEETS_SPREADSHEET_ID: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
    GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL!,
    GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY!,
  };
};

// input validation function

const validateFormData = (data: ContactFormData): data is ContactFormData => {
  const requiredFields: (keyof ContactFormData)[] = ["name", "email", "phone"];

  for (const field of requiredFields) {
    if (
      !data[field] ||
      typeof data[field] !== "string" ||
      data[field].trim() === ""
    ) {
      return false;
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data["email"])) {
    return false;
  }

  // Phone validation (basic)
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
  if (!phoneRegex.test(data.phone)) {
    return false;
  }

  return true;
};

// rate limiting (simple in-memory implementation)

const rateLimitStore: Record<string, number> = {};
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUEST = 3; // requests per minute

const checkRateLimit = (clientIP: string): boolean => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  // clean old entries
  Object.keys(rateLimitStore).forEach((ip) => {
    if (rateLimitStore[ip] < windowStart) {
      delete rateLimitStore[ip];
    }
  });

  const requestCount = Object.keys(rateLimitStore).filter((ip) =>
    ip.startsWith(clientIP)
  ).length;

  if (requestCount >= MAX_REQUEST) {
    return false;
  }

  rateLimitStore[`${clientIP}-${now}`] = now;
  return true;
};

export default async function handler(
  req: ContactApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> {
  // only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  // get client ip for rate limiting
  try {
    const clientIP =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    // check rate limit
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        error: "Too many requests. Please wait before submitting again.",
      });
    }

    // validate environment variables
    const envVars = validateEnvVars();

    // validate form data
    if (!validateFormData(req.body)) {
      return res.status(400).json({
        error: "Invalid form data. Please check all required fields.",
      });
    }

    const { name, email, phone, location, eventType, message } = req.body;

    console.log(eventType);

    // initialize jwt for google sheets
    const serviceAccoutAuth = new JWT({
      email: envVars.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: envVars.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize google sheets document
    const doc = new GoogleSpreadsheet(
      envVars.GOOGLE_SHEETS_SPREADSHEET_ID,
      serviceAccoutAuth
    );

    // load document info
    await doc.loadInfo();

    if (!doc.sheetsByIndex[0]) {
      throw new Error("No sheets found in the document");
    }

    const sheet = doc.sheetsByIndex[0];

    // Prepare row data
    const rowData: RawRowData = {
      "Full Name": name?.trim(),
      Email: email?.trim().toLowerCase(),
      Phone: phone?.trim(),
      Location: location?.trim() || "Not specified",
      "Event Type": eventType?.trim() || "Not specified",
      Message: message?.trim() || "No message provided",
      Timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    // add row to sheet
    await sheet.addRow(rowData);

    console.log(`New contact form submitted: ${name} (${email})`);

    return res.status(200).json({
      success: true,
      message:
        "Thank you for your inquiry!. We will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);

    // Don't expose internal error details to client
    return res.status(500).json({
      error:
        "Unable to process your request right now. Please try again or contact us directly.",
    });
  }
}
