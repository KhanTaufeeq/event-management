import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "Royal Weddings",
    title: "The Udaipur Palace Union",
    image: "/images/luxury-wedding.jpeg",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    category: "Festive Gatherings",
    title: "Diwali Party",
    image: "/images/festive2.jpeg",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    category: "Private Parties",
    title: "First Anniversary",
    image: "/images/private-party.jpeg",
    size: "md:col-span-1 md:row-span-1",
  },
];

export default function PortfolioTeaser() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold font-(family-name:--font-plus-jakarta-sans) tracking-widest uppercase text-sm mb-2 block">
              Our Masterpieces
            </span>
            <h2 className="text-4xl md:text-5xl font-(family-name:--font-lora) font-semibold text-brand-dark leading-tight">
              Moments We Have{" "}
              <span className="italic font-hand text-brand-gold">Crafted</span>
            </h2>
          </div>

          {/* 'View All' Button (Desktop) */}
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center text-brand-dark font-semibold font-(family-name:--font-plus-jakarta-sans) border-b border-brand-dark/30 hover:border-brand-dark transition-all pb-1 group"
          >
            View Full Gallery
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {PORTFOLIO_ITEMS.map((item) => (
            <Link
              href="/portfolio"
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${item.size}`}
            >
              {/* Image with Zoom Effect */}
              {/* Note: Parent is 'relative', so we use 'fill' on the Image */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 duration-500" />

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimization hint
                unoptimized // CRITICAL for Cloudflare deployment
              />

              {/* Text Overlay (Appears on Hover) */}
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-brand-cream text-xs font-bold tracking-widest uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-serif">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile-only 'View All' Button */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-brand-dark font-semibold border-b border-brand-dark/30 pb-1"
          >
            View Full Gallery
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
