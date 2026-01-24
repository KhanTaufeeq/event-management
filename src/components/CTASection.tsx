import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background Decor - Abstract Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-(family-name:--font-lora) text-brand-dark mb-6 leading-tight">
          Ready to Bring Your Vision to Life?
        </h2>

        <p className="text-lg text-brand-dark/70 font-(family-name:--font-plus-jakarta-sans) mb-10 max-w-2xl mx-auto">
          Whether it&apos;s a royal wedding or an intimate gathering, let&apos;s
          start a conversation about making your next event unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Action */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold font-(family-name:--font-nothing-you-could-do) text-brand-dark transition-all duration-300 bg-brand-gold rounded-full hover:bg-brand-gold hover:shadow-lg hover:-translate-y-1"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          {/* Secondary Action */}
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold font-(family-name:--font-nothing-you-could-do) text-brand-dark transition-all duration-300 bg-transparent border border-brand-dark/30 rounded-full hover:bg-brand-dark hover:text-brand-cream"
          >
            Explore More Work
          </Link>
        </div>
      </div>
    </section>
  );
}
