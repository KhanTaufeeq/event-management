import React from "react";

export const runtime = "edge";

export default function TermsOfService() {
  return (
    <main className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-(family-name:--font-lora) text-brand-cream mb-8">
          Terms of Service
        </h1>

        <div className="space-y-8 text-white/70 font-(family-name:--font-plus-jakarta-sans) leading-relaxed">
          <p>Last Updated: {new Date().getFullYear()}</p>

          <section>
            <h2 className="text-2xl text-brand-gold font-(family-name:--font-lora) mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity
              (&quot;you&quot;) and <strong>Utsava Gatherings</strong>{" "}
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
              the site, you agree that you have read, understood, and agreed to
              be bound by all of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-brand-gold font-(family-name:--font-lora) mb-4">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the &quot;Content&quot;) are owned or controlled by
              us or licensed to us, and are protected by copyright and trademark
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-brand-gold font-(family-name:--font-lora) mb-4">
              3. User Representations
            </h2>
            <p>
              By using the Site, you represent and warrant that: (1) all
              registration information you submit will be true, accurate,
              current, and complete; (2) you have the legal capacity and you
              agree to comply with these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-brand-gold font-(family-name:--font-lora) mb-4">
              4. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and defined following the laws of{" "}
              <strong>India</strong>. Utsava Gatherings and yourself irrevocably
              consent that the courts of <strong>Mumbai </strong>
              shall have exclusive jurisdiction to resolve any dispute which may
              arise in connection with these terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
