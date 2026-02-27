import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Alvora Talent",
  description: "Alvora Talent is a modern management firm representing creators, athletes, and gamers.",
};

export default function About() {
  return (
    <main className="bg-[#F6F6F4]">

      {/* Hero */}
      <section data-hero className="relative overflow-hidden bg-[#111111] pt-32 pb-20 px-8 min-h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px", animation: "grid-drift 10s linear infinite" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)", animation: "wave-pulse 5s ease-in-out infinite" }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30 mb-8">
            About
          </p>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.02] max-w-3xl">
            We believe in talent that earns its audience.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40">
              Our Story
            </p>
          </div>
          <div className="md:col-span-8 flex flex-col gap-12">
            <p className="text-2xl md:text-3xl font-light text-[#111111] leading-relaxed">
              Alvora Talent was founded on a simple belief: the most compelling talent are the ones genuinely doing something remarkable — and building audiences because of it.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-4">Our Mission</p>
                <p className="text-sm text-[#111111]/60 leading-relaxed">
                  To represent and grow a select group of creators and athletes whose work connects brands to the audiences they&apos;re trying to reach — authentically, at scale.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-4">Our Approach</p>
                <p className="text-sm text-[#111111]/60 leading-relaxed">
                  We keep our roster intentionally small. Every talent relationship is hands-on, and every brand partnership is built to last — not just to check a box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40">
                What We Stand For
              </p>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl font-semibold tracking-tight text-[#111111]">Our Values</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#E0E0DE]">
            {[
              {
                title: "Authenticity Above All",
                desc: "We only represent talent whose content reflects genuine achievement. No manufactured moments, no fake personas.",
              },
              {
                title: "Select, Not Many",
                desc: "A smaller roster means deeper relationships with both our talent and the brands we work with.",
              },
              {
                title: "Long-Term Thinking",
                desc: "We build careers, not campaigns. The best brand partnerships are the ones that grow year over year.",
              },
              {
                title: "Talent First",
                desc: "Our talent's performance and wellbeing always comes before any brand deal. Period.",
              },
              {
                title: "Earned Audience",
                desc: "Every follower chose to be there because of what they witnessed. That's rare and valuable.",
              },
              {
                title: "Brand Fit Matters",
                desc: "We decline partnerships that don't fit. Our talent's credibility is worth more than any short-term revenue.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-[#F6F6F4] p-10">
                <h3 className="text-base font-semibold text-[#111111] mb-3">{v.title}</h3>
                <p className="text-sm text-[#111111]/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
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
              Interested in working with us?
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end md:items-end">
            <Link
              href="/contact"
              className="text-xs font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
