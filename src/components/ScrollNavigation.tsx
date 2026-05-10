"use client";

import { useState, useEffect } from "react";

export default function ScrollNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll position to determine which arrow to show
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={isScrolled ? scrollToTop : scrollToBottom}
        className="p-3 bg-brand-gold text-brand-dark rounded-full shadow-2xl hover:scale-110 hover:shadow-brand-gold/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label={isScrolled ? "Scroll to top" : "Scroll to bottom"}
      >
        {isScrolled ? (
          // Up Arrow SVG
          <svg
            className="w-6 h-6 animate-fade-in"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        ) : (
          // Down Arrow SVG
          <svg
            className="w-6 h-6 animate-fade-in"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
