"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const email = "connect@utsavagatherings.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer
      className="pt-20 pb-10 text-white relative z-40 overflow-hidden"
      style={{
        backgroundColor: "#472830",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* --- BACKGROUND WATERMARK (FIXED) --- */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute -bottom-4 md:-bottom-10 left-0 w-full flex justify-center pointer-events-none select-none z-0">
        {/* Changed text size: text-[25vw] for mobile, text-[18rem] for desktop */}
        <h1 className="font-serif font-bold text-white/[0.03] text-[25vw] md:text-[18rem] leading-none tracking-tight whitespace-nowrap">
          Utsava<span>.</span>
        </h1>
      </div>

      {/* Content Container (z-10 ensures it sits ON TOP of the watermark) */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Column 1 & 2: Brand */}
          <div className="lg:col-span-2 space-y-6 pr-0 lg:pr-12">
            <h2 className="text-3xl font-serif font-bold text-brand-cream">
              Utsava<span className="text-[#b08d55]">.</span>
            </h2>
            <p className="text-[#f6e9cf]/70 font-sans text-sm leading-relaxed">
              Crafting timeless celebrations that blend tradition with modern
              elegance. From the royal palaces of Udaipur to the skylines of
              Dubai, we create memories that last a lifetime.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/utsavagatherings?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
                target="_blank"
                rel="noopener noreferrer"
                title="instagram"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b08d55] hover:text-[#472830] transition-all border border-white/10"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/share/1BvaxKZ72m/"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b08d55] hover:text-[#472830] transition-all border border-white/10"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h3 className="text-brand-cream font-bold font-(family-name:--font-lora) uppercase tracking-widest text-sm mb-5">
              Explore
            </h3>
            <ul className="space-y-3 font-sans text-sm text-[#f6e9cf]/60">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-brand-gold transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-brand-cream font-bold font-(family-name:--font-lora) uppercase tracking-widest text-sm mb-5">
              Services
            </h3>
            <ul className="space-y-3 font-sans text-sm text-[#f6e9cf]/60">
              <li>
                <Link
                  href="/services#weddings"
                  className="hover:text-brand-gold transition-colors"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/services#corporate"
                  className="hover:text-brand-gold transition-colors"
                >
                  Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="/services#social"
                  className="hover:text-brand-gold transition-colors"
                >
                  Social Events
                </Link>
              </li>
              <li>
                <Link
                  href="/services#festive"
                  className="hover:text-brand-gold transition-colors"
                >
                  Festivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-brand-cream font-bold font-(family-name:--font-lora) uppercase tracking-widest text-sm mb-5">
              Contact
            </h3>
            <ul className="space-y-4 font-(family-name:--font-plus-jakarta-sans) text-sm text-[#f6e9cf]/60">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#b08d55] mt-0.5 flex-shrink-0"
                />
                <span className="leading-snug">
                  123 Marine Drive,
                  <br />
                  Mumbai, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+917977513351"
                  className="hover:text-brand-gold transition-colors whitespace-nowrap"
                >
                  +9179775 13351
                </a>
              </li>
              {copied ? (
                <p className="text-brand-gold">Email copied</p>
              ) : (
                <li
                  className="flex items-center gap-3"
                  onClick={handleCopyEmail}
                  title={copied ? "copied" : "click to copy"}
                >
                  <Mail size={16} className="text-brand-gold flex-shrink-0" />
                  <a className="font-(family-name:--font-plus-jakarta-sans) group-hover:text-brand-gold transition-colors hover:text-brand-gold cursor-pointer">
                    connect@utsavagatherings.com
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f6e9cf]/30 font-sans uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Utsava Gatherings.</p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="hover:text-brand-gold transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-brand-gold transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
