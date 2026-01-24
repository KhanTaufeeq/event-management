import React from "react";

export const runtime = "edge";

export default function PrivacyPolicy() {
  return (
    <main className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl ont-(family-name:--font-lora) text-brand-cream mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-white/70 font-(family-name:--font-plus-jakarta-sans) leading-relaxed">
          <p>Last Updated: {new Date().getFullYear()}</p>

          <section>
            <h2 className="text-2xl text-brand-gold ont-(family-name:--font-lora) mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Utsava Gatherings</strong> (&quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;). We are committed to
              protecting your personal information and your right to privacy. If
              you have any questions or concerns about this privacy notice or
              our practices with regard to your personal information, please
              contact us at <strong>connect@utsavagatherings.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-brand-gold ont-(family-name:--font-lora) mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and services, specifically when you use our
              &quot;Contact Us&quot; form.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Names</li>
              <li>Phone Numbers</li>
              <li>Email Addresses</li>
              <li>Event Details (Dates, Types, Preferences)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-brand-gold ont-(family-name:--font-lora) mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect or receive for the sole purpose
              of communicating with you regarding your event inquiries. We do
              not sell, rent, or trade your information with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-brand-gold ont-(family-name:--font-lora) mb-4">
              4. Data Storage
            </h2>
            <p>
              Your data is securely transmitted and stored using third-party
              services (Google Sheets) strictly for our internal record-keeping
              and client management.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
