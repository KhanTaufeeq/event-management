"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, X, MapPin, Calendar } from "lucide-react";
import CTASection from "taufeeq/components/CTASection";

export const runtime = "edge";

// --- EXPANDED DATA WITH DETAILS ---
const PORTFOLIO_ITEMS = [
  // --- WEDDINGS ---
  {
    id: 1,
    category: "weddings",
    title: "The Royal Jaipur Union",
    location: "Rambagh Palace, Jaipur",
    date: "November 2020",
    image: "/images/real_wed3.jpeg",
    size: "large",
    story:
      "Aditya and Riya wanted a wedding that felt like a page out of history. We transformed the Rambagh Palace into a golden fortress. The highlight was the floating mandap on the central pool, surrounded by 5,000 lotus candles.",
    services: ["Venue Styling", "Celebrity Management", "Royal Procession"],
  },
  {
    id: 2,
    category: "weddings",
    title: "Sunset Beach Vows",
    location: "Zuri White Sands, Goa",
    date: "January 2025",
    image: "/images/wedding-beach.jpeg",
    size: "tall",
    story:
      "A breezy, bohemian affair. The couple wanted 'shoes off, hearts open.' We created a driftwood altar draped in macramé and pastel florals. The evening ended with a fire-dancer performance under the stars.",
    services: ["Beach Permissions", "Sound & Light", "Live Band"],
  },
  {
    id: 3,
    category: "weddings",
    title: "Intimate Nikkah Ceremony",
    location: "Heritage Haveli, Lucknow",
    date: "December 2019",
    image: "/images/real_wed4.jpeg",
    size: "normal",
    story:
      "Elegance in simplicity. We used 200kg of fresh jasmine (Mogra) to scent the entire venue. The decor focused on white and gold tones, reflecting the purity of the occasion.",
    services: ["Floral Decor", "Traditional Catering", "Guest Logistics"],
  },
  {
    id: 4,
    category: "weddings",
    title: "Royal Udaipur Union",
    location: "The Oberoi Udaivilas, Udaipur",
    date: "December 2024",
    image: "/images/luxury-wedding.jpeg",
    size: "normal",
    story:
      "A regal 3-day celebration by the lake. The groom arrived in a vintage Rolls Royce led by a 20-horse procession. We illuminated the entire palace facade and arranged a floating mandap under the stars.",
    services: ["Palace Decor", "Logistics & Hospitality", "Vintage Procession"],
  },

  // --- SOCIAL ---
  {
    id: 5,
    category: "social",
    title: "Golden 50th Anniversary",
    location: "Private Villa, Alibaug",
    date: "September 2018",
    image: "/images/social3.jpeg",
    size: "normal",
    story:
      "Celebrating half a century of love. We recreated the couple's first date setting from 1974. It was intimate, emotional, and absolutely perfect.",
    services: ["Retro Decor", "Private Chef", "Live Jazz"],
  },
  {
    id: 6,
    category: "social",
    title: "Great Gatsby 30th Birthday",
    location: "Soho House, Mumbai",
    date: "February 2023",
    image: "/images/social1.jpeg",
    size: "large",
    story:
      "Feathers, pearls, and champagne towers. We turned Soho House into a 1920s speakeasy. Guests were greeted by jazz musicians and custom cocktails named after the birthday girl.",
    services: ["Theme Decor", "Mixology Bar", "Costume Props"],
  },
  {
    id: 7,
    category: "social",
    title: "Rooftop Engagement",
    location: "Aer Bar, Mumbai",
    date: "March 2017",
    image: "/images/social2.jpeg",
    size: "normal",
    story:
      "Sky-high romance. With the Mumbai skyline as the backdrop, we set up a 'Ring of Flowers' structure. The proposal happened exactly at sunset.",
    services: ["Proposal Planning", "Photography", "Private Dining"],
  },

  // --- FESTIVE ---
  {
    id: 10,
    category: "festive",
    title: "Royal Onam Sadhya",
    location: "Grand Hyatt, Kochi",
    date: "August 2020",
    image: "/images/festive.jpeg",
    size: "large",
    story:
      "A vibrant harvest festival celebration for 600 guests. The centerpiece was a massive 25-foot traditional Pookalam (floral carpet). We served an authentic 26-dish Sadya feast on banana leaves, accompanied by live Chenda Melam percussionists to welcome guests.",
    services: [
      "Floral Installation (Pookalam)",
      "Traditional Sadhya Catering",
      "Cultural Entertainment",
    ],
  },
  {
    id: 11,
    category: "festive",
    title: "Diwali Card Party",
    location: "South Delhi Residence",
    date: "November 2025",
    image: "/images/festive2.jpeg",
    size: "normal",
    story:
      "Neon lights meets traditional Diyas. A modern fusion party for the city's elite. We set up professional poker tables and a fusion chaat counter.",
    services: ["Gaming Setup", "Fusion Food", "Ambient Lighting"],
  },

  // --- CORPORATE ---
  {
    id: 15,
    category: "corporate",
    title: "Tech Innovators Summit",
    location: "Taj Lands End, Mumbai",
    date: "August 2025",
    image: "/images/corporate1.jpeg",
    size: "normal",
    story:
      "A futuristic setup for India's top tech CEOs. We used projection mapping and LED tunnels to create an immersive entrance experience.",
    services: ["AV Production", "Stage Design", "Delegate Management"],
  },
  {
    id: 16,
    category: "corporate",
    title: "Awards Night Gala",
    location: "JW Marriott, Dubai",
    date: "December 2018",
    image: "/images/corporate2.jpeg",
    size: "large",
    story:
      "Glitz, glamour, and precision. Managing 50 awards across 3 hours requires split-second timing. Our team handled the show flow seamlessly.",
    services: ["Show Running", "Trophy Logistics", "Gala Dinner"],
  },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "weddings", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "social", label: "Social" },
  { id: "festive", label: "Festive" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<
    typeof PORTFOLIO_ITEMS[0] | null
  >(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedItem]);

  // Filter Logic
  const filteredItems =
    activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-12 px-6 bg-brand-dark text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <span className="text-brand-gold font-bold font-(family-name:--font-lora) tracking-widest uppercase text-xs mb-4 block animate-fade-in">
          Our Masterpieces
        </span>
        <h1 className="text-5xl md:text-7xl font-(family-name:--font-lora) text-brand-cream mb-6">
          A Canvas of{" "}
          <span className="italic font-hand text-brand-gold">Memories</span>
        </h1>
        <p className="text-brand-cream/70 text-lg md:text-xl font-(family-name:--font-plus-jakarta-sans) max-w-2xl mx-auto mb-10">
          Explore our curated gallery of events, where every image tells a story
          of precision, elegance, and joy.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold font-(family-name:--font-plus-jakarta-sans) uppercase tracking-wider transition-all cursor-pointer duration-300 border ${
                activeFilter === filter.id
                  ? "bg-brand-gold text-brand-dark border-brand-gold shadow-[0_0_15px_rgba(176,141,85,0.4)]"
                  : "bg-transparent text-brand-cream border-brand-cream/20 hover:border-brand-cream"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. THE GALLERY GRID */}
      <section className="py-20 px-6 bg-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
            {filteredItems.map((item) => (
              <div
                onClick={() => setSelectedItem(item)} // OPEN MODAL
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-200 animate-fade-in-up
                            ${item.size === "large" ? "md:col-span-2" : ""}
                            ${item.size === "tall" ? "md:row-span-2" : ""}
                        `}
              >
                {/* Image using Fill for grid layouts */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized // Cloudflare Fix
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-brand-gold text-xs font-bold font-(family-name:--font-lora) uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-(family-name:--font-lora) text-white mb-1 group-hover:text-brand-cream transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-white/70 text-sm font-(family-name:--font-plus-jakarta-sans)">
                      {item.location}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold group-hover:translate-x-0 translate-x-4">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-brand-dark/50">
              <p className="text-xl font-serif">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection />

      {/* 4. THE MODAL (POPUP) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedItem(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              title="close"
              className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-brand-gold transition-colors cursor-pointer md:text-brand-dark md:bg-white md:hover:text-white"
            >
              <X size={24} />
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-3/5 h-[40vh] md:h-full relative bg-gray-100">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                unoptimized // Cloudflare Fix
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-2/5 h-auto md:h-full overflow-y-auto bg-brand-cream p-8 md:p-12 flex flex-col">
              <span className="text-brand-dark/50 text-xs font-bold font-(family-name:--font-lora) uppercase tracking-widest mb-2">
                Project Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl font-(family-name:--font-lora) text-brand-dark mb-6 leading-tight">
                {selectedItem.title}
              </h2>

              {/* Metadata Strip */}
              <div className="flex flex-wrap gap-4 border-b border-brand-dark/10 pb-6 mb-6">
                <div className="flex items-center gap-2 text-brand-dark/70 text-sm font-(family-name:--font-plus-jakarta-sans)">
                  <MapPin size={16} className="text-brand-gold" />
                  {selectedItem.location}
                </div>
                <div className="flex items-center gap-2 text-brand-dark/70 text-sm font-(family-name:--font-plus-jakarta-sans)">
                  <Calendar size={16} className="text-brand-gold" />
                  {selectedItem.date}
                </div>
              </div>

              {/* The Story */}
              <div className="mb-8">
                <h3 className="text-lg font-bold font-(family-name:--font-lora) text-brand-dark mb-3 font-serif">
                  The Story
                </h3>
                <p className="text-brand-dark/80 font-(family-name:--font-plus-jakarta-sans) leading-relaxed">
                  {/* Note: React renders {selectedItem.story} as text, so quotes inside variable are safe. 
                      However, hardcoded text should be escaped if needed. */}
                  {selectedItem.story}
                </p>
              </div>

              {/* Services Delivered */}
              <div className="mb-8 flex-grow">
                <h3 className="text-lg font-bold text-brand-dark mb-3 font-(family-name:--font-lora)">
                  Services Delivered
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedItem.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white rounded-lg text-xs font-bold font-(family-name:--font-plus-jakarta-sans) text-brand-dark uppercase tracking-wide border border-brand-dark/5"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <Link
                href="/contact"
                className="w-full py-4 bg-brand-gold text-brand-dark text-center font-bold font-(family-name:--font-nothing-you-could-do) tracking-widest text-md rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Plan an Event Like This
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
