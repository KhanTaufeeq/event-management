"use client";
import React from "react";
import HeroSection from "taufeeq/components/HeroSection";
import LegacyStrip from "taufeeq/components/LegacyStrip";
import PortfolioTeaser from "taufeeq/components/PortfolioTeaser";
import ServicesSection from "taufeeq/components/ServiceSection";
import Testimonials from "taufeeq/components/Testimonials";
import CTASection from "taufeeq/components/CTASection";

const EventManagementHomepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6e9cf] via-[#f6e9cf] to-[#f6e9cf]">
      {/* Hero Section */}
      <HeroSection />
      {/* Stats Section */}
      <LegacyStrip />
      {/* Portfolio Teaser Section */}
      <PortfolioTeaser />
      {/* Service Section */}
      <ServicesSection />
      {/* Testimonial section */}
      <Testimonials />
      {/* cta section */}
      <CTASection />
    </div>
  );
};

export default EventManagementHomepage;
