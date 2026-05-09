"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "taufeeq/components/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* 1. LOGO */}
          <div className="flex-shrink-0">
            <Logo variant={isScrolled ? "dark" : "light"} />
          </div>

          {/* 2. DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold font-(family-name:--font-plus-jakarta-sans) uppercase tracking-widest transition-colors hover:text-brand-gold ${
                  pathname === link.href
                    ? "text-brand-gold"
                    : "text-brand-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-6 py-2 bg-brand-gold text-brand-dark font-bold font-(family-name:--font-nothing-you-could-do) tracking-wider text-sm rounded-full hover:-translate-y-1 hover:shadow-lg"
            >
              Book Event
            </Link>
          </div>

          {/* 3. MOBILE MENU TOGGLE */}
          <button
            className="md:hidden relative z-50 text-brand-cream hover:text-brand-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 4. MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-serif font-bold transition-colors ${
                pathname === link.href ? "text-brand-gold" : "text-brand-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-wider text-sm rounded-full mt-4"
          >
            Book Event
          </Link>
        </div>
      </div>
    </>
  );
}
