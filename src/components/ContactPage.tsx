"use client";
import React, { useState } from "react";
import { Mail, Phone, ChevronDown } from "lucide-react";
import ContactForm from "taufeeq/components/ContactUs";

// --- FAQ DATA ---
const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 6-12 months in advance for weddings and large events to ensure venue availability.",
  },
  {
    question: "Do you handle destination weddings?",
    answer:
      "Yes! We specialize in destination weddings across India and internationally (Dubai, Bangkok, and Maldives).",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer bespoke packages tailored to your specific needs. Contact us for a consultation so we can understand your vision and budget.",
  },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("connect@utsavagatherings.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* 1. HERO SECTION - Clean & Typography Focused */}
      <section className="relative pt-40 pb-20 px-6 bg-brand-dark text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand-gold font-bold font-(family-name:--font-lora) tracking-widest uppercase text-xs mb-4 block animate-fade-in">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-(family-name:--font-lora) text-brand-cream mb-6 leading-tight">
            Let&apos;s Create <br />
            <span className="italic font-(family-name:--font-lora) text-brand-gold">
              Something Magical
            </span>
          </h1>
          <p className="text-brand-cream/70 text-lg md:text-xl font-(family-name:--font-plus-jakarta-sans) max-w-2xl mx-auto">
            Your vision deserves flawless execution. Reach out to our team to
            begin the journey of planning your perfect event.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT - Split Layout */}
      <section className="relative -mt-10 pb-24 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT COLUMN: Contact Info (4 Columns) */}
            <div className="lg:col-span-4 space-y-8 mt-10 lg:mt-0">
              {/* Quick Contact Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5">
                <h3 className="text-2xl font-(family-name:--font-lora) text-brand-dark mb-6">
                  Direct Channels
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand-dark/50 font-bold font-(family-name:--font-plus-jakarta-sans) mb-1">
                        Talk to us
                      </p>
                      <a
                        href="tel:+917977513351"
                        className="text-brand-dark font-(family-name:--font-plus-jakarta-sans) text-md hover:text-brand-gold transition-colors"
                      >
                        +9179775 13351
                      </a>
                      <p className="text-xs text-brand-dark/60 mt-1 font-(family-name:--font-plus-jakarta-sans)">
                        Mon-Sat, 10am - 8pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="w-full">
                      <p className="text-xs uppercase tracking-widest text-brand-dark/50 font-bold font-(family-name:--font-plus-jakarta-sans) mb-1">
                        Email us
                      </p>

                      {copied ? (
                        <p className="text-brand-dark font-(family-name:--font-plus-jakarta-sans) text-md">
                          Email Copied
                        </p>
                      ) : (
                        <button
                          onClick={handleCopyEmail}
                          className="group flex items-center gap-2 text-left w-full"
                          title="Click to copy email"
                        >
                          <span className="text-brand-dark font-(family-name:--font-plus-jakarta-sans) text-md group-hover:text-brand-gold transition-colors cursor-pointer">
                            connect@utsavagatherings.com
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Form (8 Columns) */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION - Clean & Minimal */}
      <section className="py-20 bg-brand-cream border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-lora) text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="font-(family-name:--font-lora) border border-brand-dark/10 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent hover:bg-brand-cream/20 transition-colors"
                >
                  <span className="font-(family-name:--font-lora) text-lg text-brand-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 cursor-pointer text-brand-gold transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                    openFaq === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-brand-dark/70 font-(family-name:--font-plus-jakarta-sans) leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
