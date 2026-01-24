import React from "react";
import Image from "next/image";

const TEAM = [
  {
    name: "Raees Khan",
    role: "Founder & Chief Planner",
    specialty: "Royal Weddings",
    image: "/images/raees_sir.jpeg",
    bio:
      "With over 12 years of experience, Raees has orchestrated some of the most prestigious weddings in India, Dubai, and Thailand.",
  },
  {
    name: "Shahid Khan",
    role: "Corporate Director",
    specialty: "Tech Summits & Galas",
    image: "/images/shahid.jpeg",
    bio:
      "Shahid brings order to chaos. His logistical precision ensures that even 500+ attendee events run like clockwork.",
  },
  {
    name: "Fayaz Khan",
    role: "Head of Operations",
    specialty: "Destination Logistics",
    image: "/images/fayaz-clearbg.png",
    bio:
      "The man on the ground. Fayaz ensures every vendor, flower, and guest arrives exactly when and where they should.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3 block">
            The Architects of Joy
          </span>
          <h2 className="text-4xl md:text-5xl font-(family-name:--font-lora) text-brand-dark mb-6">
            Meet the <span className="italic text-brand-gold">Maestros</span>
          </h2>
          <div className="w-24 h-1 bg-brand-dark/10 mx-auto rounded-full"></div>
        </div>

        {/* The Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, index) => (
            <div key={index} className="group relative">
              {/* Image Container with Luxury Hover Effect */}
              {/* Note: 'relative' is required here for 'fill' to work */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-t-[40px] rounded-b-none mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill // Automatically fills the parent h-[400px] w-full
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw" // Optimization hint
                  unoptimized // CRITICAL for Cloudflare
                />
              </div>

              {/* Text Info */}
              <div className="text-center px-4">
                <h3 className="text-2xl font-(family-name:--font-lora) text-brand-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-gold font-(family-name:--font-lora) font-bold text-xs uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-brand-dark/60 font-(family-name:--font-plus-jakarta-sans) text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
