"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import CustomSelect from "taufeeq/components/DropDown";
import { Send, Loader2 } from "lucide-react";
import CustomPhoneInput, { validatePhone } from "taufeeq/components/PhoneInput";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  eventType: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

interface ContactFormProps {
  className?: string;
}

// Keep your logic helper
const getEnvVar = (key: string, fallback: string): string => {
  if (typeof window !== "undefined") {
    return (process.env[key] as string) || fallback;
  }
  return fallback;
};

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const businessPhone = getEnvVar(
    "NEXT_PUBLIC_BUSINESS_PHONE",
    "+447818991725"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // LOGIC: Handle Submit (Preserved)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setIsSubmitting(false);
      return;
    }

    // international phone validation
    if (!validatePhone(formData.phone)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid phone number",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you! We will contact you shortly.",
        });
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          eventType: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const LOCATION_TYPES = [
    { value: "Mumbai (Full Execution)", label: "Mumbai (Full Execution)" },
    {
      value: "India - Destination (Advisory)",
      label: "India - Destination (Advisory)",
    },
    { value: "International (Advisory)", label: "International (Advisory)" },
  ];

  const SERVICE_TYPES = [
    { value: "Wedding", label: "Wedding" },
    { value: "Pre-Wedding Shoot", label: "Pre-Wedding Shoot" },
    { value: "Honeymoon", label: "Honeymoon" },
    { value: "Corporate Event", label: "Corporate Event" },
    { value: "other", label: "Other" },
  ];

  // VISUAL: New Input Styling Helper
  const inputClasses = `
    w-full bg-white/5 border rounded-md border-brand-cream/20 border-0 px-2 py-4 
    text-brand-cream placeholder-brand-cream/40 transition-all duration-300
    focus:border-brand-gold focus:ring-0 focus:bg-transparent
    font-(family-name:--font-plus-jakarta-sans) outline-none
  `;

  return (
    <div
      className={`bg-brand-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5 ${className}`}
    >
      <div className="mb-10">
        <h3 className="text-3xl font-(family-name:--font-lora) text-brand-cream mb-2">
          Send us a Note
        </h3>
        <p className="text-brand-cream/60 font-(family-name:--font-plus-jakarta-sans) text-sm tracking-wide">
          Fill in the details below and we will orchestrate the rest.
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus && (
        <div
          className={`mb-8 p-4 rounded-lg text-sm font-semibold tracking-wide ${
            submitStatus.type === "success"
              ? "bg-green-900/30 text-green-400 border border-green-800"
              : "bg-red-900/30 text-red-400 border border-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label
              htmlFor="name"
              className="font-(family-name:--font-plus-jakarta-sans) block text-xs uppercase tracking-widest text-brand-gold mb-1 group-focus-within:text-brand-cream transition-colors"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="e.g. Aditya Kapoor"
            />
          </div>
          <div className="group">
            <label
              htmlFor="email"
              className="block text-xs uppercase font-(family-name:--font-plus-jakarta-sans) tracking-widest text-brand-gold mb-1 group-focus-within:text-brand-cream transition-colors"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="e.g. aditya@example.com"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CustomPhoneInput
            value={formData.phone}
            onChange={handlePhoneChange}
          />
          <div className="group">
            <label
              htmlFor="location"
              className="font-(family-name:--font-plus-jakarta-sans) block text-xs uppercase tracking-widest text-brand-gold mb-1 group-focus-within:text-brand-cream transition-colors"
            >
              Where is your Event?
            </label>
            <CustomSelect
              value={formData.location}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, location: val }))
              }
              options={LOCATION_TYPES}
              placeholder="Select a location"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label
              htmlFor="eventType"
              className="font-(family-name:--font-plus-jakarta-sans) block text-xs uppercase tracking-widest text-brand-gold mb-1 group-focus-within:text-brand-cream transition-colors"
            >
              What do you need help with?
            </label>
            <CustomSelect
              value={formData.eventType}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, eventType: val }))
              }
              options={SERVICE_TYPES}
              placeholder="Select a service"
            />
          </div>
        </div>

        {/* Message Area */}
        <div className="group">
          <label
            htmlFor="message"
            className="font-(family-name:--font-plus-jakarta-sans) block text-xs uppercase tracking-widest text-brand-gold mb-1 group-focus-within:text-brand-cream transition-colors"
          >
            Your Vision
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us about the dream you want to create..."
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col md:flex-row items-center gap-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full md:w-auto px-8 py-4 bg-brand-gold text-brand-dark font-bold font-(family-name:--font-nothing-you-could-do) tracking-widest text-md rounded-full hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* WhatsApp Button Integration */}
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-xs uppercase tracking-wider">
              or
            </span>
            <a
              href={`https://wa.me/${businessPhone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="submit"
            >
              <Image
                src="/images/WhatsAppButtonGreenMedium.png"
                alt="Chat on WhatsApp"
                width={180}
                height={45}
                className="h-[45px] w-auto object-contain"
                unoptimized
              />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
