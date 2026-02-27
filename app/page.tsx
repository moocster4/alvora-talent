import Link from "next/link";
import { ATMonogram } from "@/components/Logo";

export default function Home() {
  return (
    <main className="bg-[#F6F6F4]">

      {/* Hero */}
      <section data-hero className="relative min-h-screen flex flex-col justify-end pb-20 px-8 pt-32 bg-[#111111] overflow-hidden">
        {/* Grid with wave drift */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            animation: "grid-drift 10s linear infinite",
          }}
        />
        {/* Radial wave pulse */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)",
            animation: "wave-pulse 5s ease-in-out infinite",
          }}
        />
        {/* Large background monogram */}
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03]">
          <ATMonogram className="w-[600px] h-auto" dark />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30 mb-8">
            Alvora Talent — Est. 2024
          </p>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white leading-[1.02] max-w-4xl mb-12">
            Management for the modern era of talent.
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Link
              href="/contact"
              className="text-xs font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
            >
              Work With Us
            </Link>
            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-0.5 hover:text-white/70 hover:border-white/30 transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40">
              Who We Are
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl font-light text-[#111111] leading-relaxed">
              Alvora Talent is a modern management firm representing a curated roster of creators, professional athletes, and gamers. We operate at the intersection of sport, entertainment, and digital culture.
            </p>
          </div>
        </div>
      </section>

      {/* Roster */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40">
                Our Roster
              </p>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl font-semibold tracking-tight text-[#111111]">
                Exceptional talent.<br />Across every category.
              </h2>
            </div>
          </div>

          {/* Talent grid */}
          <div className="grid md:grid-cols-3 gap-px bg-[#E0E0DE]">
            {[
              {
                name: "Ryan Mitchell",
                category: "Athlete — Mountaineer",
                desc: "Summited Everest. Attempted K2. 120M+ views documenting the edge of human endurance.",
                stats: "336K YT · 57K IG",
              },
              {
                name: "Talent",
                category: "Gaming — Coming Soon",
                desc: "Our gaming roster is growing. Reach out to discuss representation opportunities.",
                stats: "—",
              },
              {
                name: "Talent",
                category: "Creator — Coming Soon",
                desc: "Selective representation for digital creators with proven, engaged audiences.",
                stats: "—",
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#F6F6F4] p-10 flex flex-col justify-between min-h-72 group">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-4">{t.category}</p>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3">{t.name}</h3>
                  <p className="text-sm text-[#111111]/50 leading-relaxed">{t.desc}</p>
                </div>
                <p className="text-xs font-medium text-[#111111]/30 mt-8 tracking-wide">{t.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40">
                What We Do
              </p>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl font-semibold tracking-tight text-[#111111]">
                Full-service representation.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#E0E0DE]">
            {[
              {
                num: "01",
                title: "Brand Partnerships",
                desc: "Strategic alignment between talent and brands. We negotiate, manage, and execute deals that benefit both sides long-term.",
              },
              {
                num: "02",
                title: "Campaign Management",
                desc: "End-to-end execution from brief to delivery. Your campaign runs on schedule, on brand, and at the quality level you expect.",
              },
              {
                num: "03",
                title: "Career Development",
                desc: "We think beyond the next deal. Our talent relationships are built around long-term growth, not short-term transactions.",
              },
            ].map((s) => (
              <div key={s.num} className="bg-[#F6F6F4] p-10">
                <p className="text-xs font-mono text-[#111111]/20 mb-6">{s.num}</p>
                <h3 className="text-base font-semibold text-[#111111] mb-3">{s.title}</h3>
                <p className="text-sm text-[#111111]/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/50 border-b border-[#111111]/20 pb-0.5 hover:text-[#111111] hover:border-[#111111]/50 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-8">
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Ready to work with serious talent?
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end md:items-end">
            <Link
              href="/contact"
              className="text-xs font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
