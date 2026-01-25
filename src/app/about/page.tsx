import React from "react";
import Image from "next/image";
import TeamSection from "taufeeq/components/TeamSection";
import CTASection from "taufeeq/components/CTASection";

export default function AboutPage() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      {/* 1. HERO - Simple & Clean */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-(family-name:--font-lora) text-brand-cream mb-6">
          Our{" "}
          <span className="italic text-brand-gold font-(family-name:--font-lora)">
            Story
          </span>
        </h1>
        <p className="text-brand-cream/70 text-lg md:text-xl font-(family-name:--font-plus-jakarta-sans) max-w-2xl mx-auto">
          We do not just plan events; we weave stories, honor traditions, and
          create moments that linger in memory forever.
        </p>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Decorative Frame: Changed border to Gold so it is visible on dark bg */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-gold/30 rounded-tr-[50px] rounded-bl-[50px] z-0"></div>

            <Image
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop"
              alt="Event Setup"
              width={600}
              height={500}
              className="relative z-10 w-full h-[500px] object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-2xl"
              unoptimized // CRITICAL for Cloudflare
            />
          </div>

          {/* Text Side */}
          <div>
            <span className="text-brand-cream font-bold tracking-widest uppercase text-xs mb-4 block font-(family-name:--font-plus-jakarta-sans)">
              Our Philosophy
            </span>
            <h2 className="text-4xl font-(family-name:--font-lora) text-brand-cream mb-6 leading-tight">
              &quot;<span className="text-brand-gold">Perfection</span> is not
              an accident. It is a{" "}
              <span className="italic text-brand-gold font-(family-name:--font-nothing-you-could-do)">
                habit
              </span>
              .&quot;
            </h2>
            <div className="space-y-6 text-brand-cream/80 font-(family-name:--font-plus-jakarta-sans) text-lg leading-relaxed">
              <p>
                Utsava Gatherings began 12 years ago with a simple belief: every
                celebration is a unique chapter in a family&apos;s history. It
                deserves to be told with elegance and precision.
              </p>
              <p>
                We have grown from a small team in Mumbai to a global presence,
                but our core values remain the same. We listen before we plan.
                We obsess over the details so you do not have to. And we believe
                that hospitality is an art form.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-brand-cream/10 font-(family-name:--font-lora)">
              <p className="text-3xl text-brand-cream">Raees Khan</p>
              <p className="text-xs uppercase tracking-widest text-brand-gold mt-1 font-(family-name:--font-plus-jakarta-sans)">
                Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE TEAM */}
      <TeamSection />

      {/* 4. CTA */}
      <CTASection />
    </div>
  );
}
