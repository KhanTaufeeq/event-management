import React from "react";

const STATS = [
  { number: "15+", label: "Years of Excellence" },
  { number: "450+", label: "Events Curated" },
  { number: "15+", label: "Cities Covered" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function LegacyStrip() {
  return (
    // Changed bg to brand-cream for a solid, premium foundation
    <section className="py-20 bg-brand-cream border-y border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Added 'divide-x' for those elegant vertical lines between numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-dark/10">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* UPGRADE 1: Used 'font-serif' for the number. 
                   It looks much more expensive than sans-serif.
                */}
              <div className="text-5xl md:text-6xl font-(family-name:--font-lora) font-bold text-brand-dark mb-3 font-serif group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                {stat.number}
              </div>

              {/* UPGRADE 2: Used 'font-sans' and uppercase tracking for the label */}
              <div className="text-brand-dark/70 text-sm font-(family-name:--font-plus-jakarta-sans) font-semibold tracking-[0.15em] uppercase font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
