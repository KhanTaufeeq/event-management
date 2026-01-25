import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTASection from "taufeeq/components/CTASection";

const SERVICES_DETAILED = [
  {
    id: "weddings",
    title: "Luxury Weddings",
    subtitle: "Orchestrating Your Fairytale",
    description:
      "Your wedding is not just an event; it's a legacy. We specialize in creating bespoke wedding experiences that blend traditional utsava with modern elegance. From finding the perfect palace in Udaipur to coordinating a 500-guest sangeet, we handle it all.",
    features: [
      "Venue Scouting & Booking",
      "Theme & Concept Design",
      "Guest Hospitality & Logistics",
      "Celebrity Entertainment",
      "Gourmet Catering Management",
    ],
    image: "/images/luxury-wedding.jpeg",
  },
  {
    id: "corporate",
    title: "Corporate Galas & Summits",
    subtitle: "Where Business Meets Brilliance",
    description:
      "We understand the stakes of corporate events. Whether it's a product launch, an annual tech summit, or an awards night, we deliver precision, branding alignment, and flawless execution that impresses your stakeholders.",
    features: [
      "Stage & AV Production",
      "Brand Activation",
      "Delegate Management",
      "Gala Dinner Setup",
      "Corporate Gifting Solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "social",
    title: "Social & Private Parties",
    subtitle: "Celebrating Life's Milestones",
    description:
      "From a 50th Golden Anniversary to an intimate engagement soirée, we turn personal moments into unforgettable memories. We focus on intimacy, warmth, and personalized details that reflect your family's story.",
    features: [
      "Private Villa/Venue Booking",
      "Bespoke Decor",
      "Live Music & DJ",
      "Cocktail Bar Setup",
      "Personalized Invitations",
    ],
    image: "/images/private-party.jpeg",
  },
  {
    id: "festive",
    title: "Festive Celebrations",
    subtitle: "Tradition with a Modern Twist",
    description:
      "Diwali card parties, Eid gatherings, or Christmas balls. We bring the perfect blend of cultural authenticity and modern flair to your festivities. Let us handle the chaos while you enjoy the celebration.",
    features: [
      "Traditional Decor themes",
      "Cultural Entertainment",
      "Festive Catering Menus",
      "Return Gift Curation",
      "Lighting & Sound",
    ],
    image: "/images/festive.jpeg",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    desc: "We meet over coffee to understand your vision, budget, and dreams.",
  },
  {
    number: "02",
    title: "Concept",
    desc:
      "Our team drafts a mood board, layout, and detailed plan for your approval.",
  },
  {
    number: "03",
    title: "Execution",
    desc:
      "We manage vendors, logistics, and timelines. You just show up and enjoy.",
  },
  {
    number: "04",
    title: "Wrap Up",
    desc:
      "Post-event closure, settlements, and ensuring you leave with happy memories.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 bg-brand-dark text-center">
        <span className="text-brand-gold font-bold font-(family-name:--font-lora) tracking-widest uppercase text-xs mb-4 block">
          Our Expertise
        </span>
        <h1 className="text-5xl md:text-7xl font-(family-name:--font-lora) text-brand-cream mb-6">
          Excellence in <br />
          <span className="italic text-brand-gold">Every Detail</span>
        </h1>
        <p className="text-brand-cream/70 text-lg md:text-xl font-(family-name:--font-plus-jakarta-sans) max-w-2xl mx-auto">
          We don&apos;t just supply services; we curate experiences. Discover
          how we can bring your specific vision to life.
        </p>
      </section>

      {/* 2. THE PROCESS STRIP (How it works) */}
      <section className="py-20 border-b border-brand-dark/10 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-(family-name:--font-lora) text-brand-dark">
              The Utsava Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="text-center group relative">
                {/* Connecting Line (Desktop Only) */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-brand-dark/20 -z-10"></div>
                )}

                <div className="w-16 h-16 bg-brand-dark border border-brand-dark/10 rounded-full flex items-center justify-center text-xl font-serif font-bold text-brand-cream mx-auto mb-6 group-hover:bg-brand-cream group-hover:text-brand-dark transition-colors duration-300 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-(family-name:--font-lora) text-brand-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-dark/60 leading-relaxed px-4 font-(family-name:--font-plus-jakarta-sans)">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES (Zig-Zag Layout) */}
      <section className="py-0">
        {SERVICES_DETAILED.map((service, index) => (
          <div
            key={service.id}
            id={service.id} // Anchor ID for scrolling
            className={`py-24 px-6 ${
              index % 2 === 0 ? "bg-brand-cream/50" : "bg-brand-cream/70"
            }`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Side - Order swaps based on index */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="absolute inset-0 bg-brand-dark/5 translate-x-4 translate-y-4 rounded-3xl"></div>

                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={500}
                  className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"
                  unoptimized // CRITICAL for Cloudflare
                />
              </div>

              {/* Text Side */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <span className="text-brand-gold font-bold font-(family-name:--font-lora) tracking-widest uppercase text-xs mb-2 block">
                  0{index + 1}
                </span>
                <h2 className="text-4xl md:text-5xl font-(family-name:--font-lora) text-brand-dark mb-2">
                  {service.title}
                </h2>
                <h3 className="text-xl font-(family-name:--font-lora) text-brand-dark/60 mb-6">
                  {service.subtitle}
                </h3>
                <p className="text-brand-dark/70 text-lg mb-8 leading-relaxed font-(family-name:--font-plus-jakarta-sans)">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brand-gold flex-shrink-0"
                      />
                      <span className="text-brand-dark/80 text-sm font-(family-name:--font-plus-jakarta-sans)">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold font-(family-name:--font-nothing-you-could-do) text-brand-dark transition-all duration-300 bg-brand-gold rounded-full hover:bg-brand-gold hover:shadow-lg hover:-translate-y-1"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. CTA */}
      <CTASection />
    </div>
  );
}
