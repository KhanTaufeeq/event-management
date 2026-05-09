import React from "react";
import Image from "next/image";

const TEAM = [
  {
    name: "Shahid Khan",
    role: "Founder & Managing Director",
    image: "/images/shahid.jpeg",
    bio: "The visionary who started it all. Built on the principles of absolute honesty and loyalty, Shahid ensures every client is treated like family.",
  },
  {
    name: "Sumaiya Anjum",
    role: "Chief Operating Officer",
    image: "/images/sumaiya.jpeg",
    bio: "Progressive, highly ambitious, and smart. Sumaiya drives our internal strategy and ensures seamless operations across all global bookings.",
  },
  {
    name: "Tarique Khan",
    role: "Director of Partnerships",
    image: "/images/tarique.jpeg",
    bio: "With a sharp analytical mind and an extensive background in sales, Tarique secures exclusive trade rates with premium global resorts.",
  },
  {
    name: "Fayaz Khan",
    role: "Head of Global Advisory",
    image: "/images/fayaz (2).png",
    bio: "Confident and well-versed in global culture, Fayaz is the trusted advisor for our NRI and high-net-worth clients seeking destination events.",
  },
  {
    name: "Raees Khan",
    role: "Head of Mumbai Execution",
    image: "/images/raees_sir.jpeg",
    bio: "With over 12 years of experience, Raees orchestrates our signature physical events and grand weddings in Mumbai with flawless precision.",
  },
  {
    name: "Sadaf Naz",
    role: "Head of Event Logistics",
    image: "/images/sadaf (2).png",
    bio: "The operational backbone. Focused and determined, Sadaf is the ultimate team player who ensures every timeline and vendor is perfectly managed.",
  },
  {
    name: "Ashna Khan",
    role: "Creative Director",
    image: "/images/ashna.png",
    bio: "With a deeply artistic eye, Ashna designs the conceptual mood boards and thematic aesthetics that make our events visually unforgettable.",
  },
  {
    name: "Ayan Khan",
    role: "Digital Marketing Manager",
    image: "/images/Ayan_Ai.png",
    bio: "Smart, creative, and digitally native. Ayan is the voice of our brand, showcasing our magical moments across all social media platforms.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3 block">
            The Family Behind The Magic
          </span>
          <h2 className="text-4xl md:text-5xl font-(family-name:--font-lora) text-brand-dark mb-6">
            Meet the <span className="italic text-brand-gold">Maestros</span>
          </h2>
          <div className="w-24 h-1 bg-brand-dark/10 mx-auto rounded-full"></div>
        </div>

        {/* The Team Grid - Updated to 4 columns for 8 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <div key={index} className="group relative">
              {/* Image Container with Luxury Hover Effect */}
              <div className="relative h-[350px] w-full overflow-hidden rounded-t-[40px] rounded-b-none mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized // CRITICAL for Cloudflare
                />
              </div>

              {/* Text Info */}
              <div className="text-center px-2">
                <h3 className="text-xl font-(family-name:--font-lora) text-brand-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-gold font-(family-name:--font-lora) font-bold text-[10px] uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-brand-dark/70 font-(family-name:--font-plus-jakarta-sans) text-sm leading-relaxed">
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
