import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import Navbar from "taufeeq/components/Navbar";
import Footer from "taufeeq/components/Footer";
import ScrollNavigation from "taufeeq/components/ScrollNavigation";
import "./globals.css";

const lora = Playfair_Display({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plus_jakarta_sans = Montserrat({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const nothing_you_could_do = Great_Vibes({
  variable: "--font-nothing-you-could-do",
  subsets: ["latin"],
  weight: ["400"],
});

// const lora = Lora({
//   variable : "--font-lora",
//   subsets: ["cyrillic"],
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
// })

export const metadata: Metadata = {
  title: "Utsava Gatherings | Luxury Event Execution & Global Advisory",
  description:
    "Curating extraordinary experiences. We offer signature end-to-end event execution in Mumbai and premium destination wedding advisory for clients worldwide.",
  openGraph: {
    title: "Utsava Gatherings | Luxury Events & Advisory",
    description: "Curating extraordinary experiences globally.",
    url: "https://www.utsavagatherings.com",
    siteName: "Utsava Gatherings",
    images: [
      {
        url: "https://www.utsavagatherings.com/images/utsava.png",
        width: 1200,
        height: 630,
        alt: "Utsava Gatherings Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="images/utsava.svg"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${lora.variable} ${plus_jakarta_sans.variable} ${nothing_you_could_do.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen relative flex flex-col">{children}</main>
        <Footer />
        <ScrollNavigation />
      </body>
    </html>
  );
}
