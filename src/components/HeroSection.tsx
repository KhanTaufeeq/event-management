"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/indian-wedding.jpg"
          alt="Luxury Event Background"
          fill
          priority
          className="object-cover"
          quality={90}
          unoptimized
        />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-16">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-(family-name:--font-lora) text-brand-cream mb-6 leading-tight drop-shadow-xl">
          Architects of Eternal Joy
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-xl text-brand-cream mb-10 max-w-2xl mx-auto font-(family-name:--font-nothing-you-could-do)">
          From intimate gatherings to grand galas, we turn your vision into an
          unforgettable reality with precision, elegance, and style.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center bg-brand-dark/50 backdrop-blur-md text-brand-cream px-8 py-4 rounded-full text-lg font-(family-name:--font-nothing-you-could-do) font-semibold border border-black/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
          >
            Plan Your Event
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 font-(family-name:--font-nothing-you-could-do)" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/portfolio"
            className="group bg-brand-cream/50 backdrop-blur-md text-brand-dark px-8 py-4 rounded-full text-lg font-(family-name:--font-nothing-you-could-do) font-semibold border border-black/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <span className="text-white/70 text-sm font-sans tracking-widest uppercase text-xs">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
