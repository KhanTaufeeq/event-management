import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Aditya & Riya",
    event: "Royal Wedding in Udaipur",
    // Escaped quotes & apostrophes
    text:
      "Utsava Gatherings didn't just plan our wedding; they orchestrated a dream. Every detail, from the floral decor to the guest logistics, was flawless. Our guests are still talking about the entry setup!",
    rating: 5,
    image: "/images/testimonial1.png", // Added leading slash
  },
  {
    id: 2,
    name: "Vikram Singhania",
    role: "CEO, TechFlow Systems",
    event: "Annual Corporate Summit",
    text:
      "Professionalism at its peak. They handled our 500+ attendee gala with absolute precision. The branding integration was subtle yet impactful. Highly recommended for high-stakes corporate events.",
    rating: 5,
    image: "/images/testimonial2.png",
  },
  {
    id: 3,
    name: "Mrs. Kapoor",
    event: "50th Golden Anniversary",
    text:
      "We wanted something intimate yet luxurious for my parents' 50th. The team understood the emotion behind the event perfectly. It was magical, warm, and utterly grand.",
    rating: 5,
    image: "/images/testimonial5.png",
  },
  {
    id: 4,
    name: "Sarah & David",
    event: "Destination Wedding, Goa",
    text:
      "Planning a wedding from Maldives was stressful until we hired Utsava. They handled the time zone differences and local vendors effortlessly. The beach setup was straight out of a movie.",
    rating: 5,
    image: "/images/testimonial4.png",
  },
  {
    id: 5,
    name: "Rajesh Gupta",
    event: "Diwali Card Party",
    text:
      "The best party hosts in Mumbai! The decor was vibrant yet classy, and the catering management was superb. They turned our home into a festive palace for the night.",
    rating: 5,
    image: "/images/testimonial3.png",
  },
  {
    id: 6,
    name: "Priya & Ankit",
    event: "Sangeet & Cocktail",
    text:
      "We were worried about the lighting and sound for the Sangeet, but their technical team is a beast. The stage looked like a concert arena! Thank you for making us look like stars.",
    rating: 5,
    image: "/images/testimonial6.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      {/* Background Decor: Giant Quote Icon */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
        <Quote size={300} color="#f6e9cf" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-cream font-bold font-(family-name:--font-lora) tracking-widest uppercase text-xs mb-3 block">
            Love Notes
          </span>
          <h2 className="text-4xl md:text-5xl font-(family-name:--font-lora) text-brand-cream mb-6">
            Stories from Our{" "}
            <span className="italic font-hand text-brand-gold">
              Happy Clients
            </span>
          </h2>
          <p className="text-brand-cream/60 max-w-2xl mx-auto font-(family-name:--font-plus-jakarta-sans)">
            We have had the privilege of serving over 450+ families and
            corporations. Here is what they have to say about the Grandeur
            experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Text */}
              {/* Note: &quot; is technically optional inside {curly braces}, but good practice for raw HTML text */}
              <p className="text-brand-cream/90 font-(family-name:--font-plus-jakarta-sans) text-lg leading-relaxed mb-8 italic flex-grow">
                &quot;{review.text}&quot;
              </p>

              {/* Author Profile */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                {/* Avatar Image */}
                <div className="relative flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={48} // 12 * 4 = 48px
                    height={48}
                    className="rounded-full object-cover border-2 border-brand-gold/50"
                    unoptimized // CRITICAL for Cloudflare deployment
                  />
                </div>

                {/* Name & Event */}
                <div>
                  <h4 className="text-brand-cream font-bold font-(family-name:--font-plus-jakarta-sans) text-base">
                    {review.name}
                  </h4>
                  <p className="text-brand-gold text-xs uppercase tracking-wider mt-0.5 font-(family-name:--font-plus-jakarta-sans)">
                    {review.role || review.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
