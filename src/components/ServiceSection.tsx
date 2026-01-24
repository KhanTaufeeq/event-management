import React from "react";
import Link from "next/link";
// Added 'Sparkles' for the festive icon
import {
  ArrowRight,
  Star,
  Briefcase,
  GlassWater,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Luxury Weddings",
    description:
      "From intimate ceremonies to royal destinations, we orchestrate every detail of your big day with grace and grandeur.",
    link: "/services#weddings",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Corporate Galas",
    description:
      "Impress clients and celebrate milestones. We deliver professional, high-impact events that reflect your brand's prestige.",
    link: "/services#corporate",
  },
  {
    icon: <GlassWater className="w-8 h-8" />,
    title: "Social Celebrations",
    description:
      "Milestone birthdays, anniversaries, or private soirées. We turn personal moments into unforgettable memories.",
    link: "/services#social",
  },
  {
    // New Service Added
    icon: <Sparkles className="w-8 h-8" />,
    title: "Festive Celebrations",
    description:
      "Diwali parties, Eid gatherings, or Christmas balls. We bring the perfect blend of tradition and modern flair to your festivities.",
    link: "/services#festive",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-brand-cream border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-dark/60 font-bold font-(family-name:--font-plus-jakarta-sans) tracking-widest uppercase text-xs mb-3 block">
            What We Do Best
          </span>
          <h2 className="text-4xl md:text-5xl font-(family-name:--font-lora) font-semibold text-brand-dark mb-6">
            Curating Experiences for Every Occasion
          </h2>
          <p className="text-brand-dark/80 font-(family-name:--font-plus-jakarta-sans) text-lg">
            We don&apos;t believe in one-size-fits-all. Our approach is tailored to
            the unique essence of the event and the host.
          </p>
        </div>

        {/* The Grid - Updated for 4 items */}
        {/* 'md:grid-cols-2' creates a nice 2x2 grid on tablets/laptops */}
        {/* 'lg:grid-cols-4' puts them all in one row on big screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-brand-dark p-8 rounded-2xl shadow-sm hover:bg-brand-cream hover:shadow-xl transition-all duration-300 border border-brand-dark/5 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-brand-cream transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-(family-name:--font-lora) text-brand-cream mb-3 group-hover:text-brand-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-cream font-(family-name:--font-plus-jakarta-sans) mb-8 text-sm leading-relaxed flex-grow group-hover:text-brand-dark">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.link}
                className="inline-flex items-center px-6 py-2 bg-brand-gold text-md font-bold font-(family-name:--font-nothing-you-could-do) tracking-wider rounded-full text-brand-dark group-hover:text-brand-dark transition-colors mt-auto"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
