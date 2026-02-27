import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Alvora Talent",
  description: "Brand partnerships, campaign management, and long-term representation for world-class talent.",
};

export default function Services() {
  return (
    <main className="bg-[#F6F6F4]">

      {/* Hero */}
      <section data-hero className="relative overflow-hidden bg-[#111111] pt-32 pb-20 px-8 flex flex-col justify-end">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px", animation: "grid-drift 10s linear infinite" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)", animation: "wave-pulse 5s ease-in-out infinite" }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30 mb-8">
            Services
          </p>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.02] max-w-3xl">
            Full-service representation for serious talent.
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto">
          <div className="divide-y divide-[#E0E0DE]">
            {[
              {
                num: "01",
                title: "Brand Partnerships",
                desc: "We match brands with the right talent based on audience alignment, content fit, and shared values. This isn't about reach alone — it's about finding a partner whose audience will actually care about what you're building.",
                details: [
                  "Audience demographic analysis",
                  "Brand-talent alignment assessment",
                  "Negotiation and contract management",
                  "Exclusivity and category rights",
                ],
              },
              {
                num: "02",
                title: "Campaign Management",
                desc: "From initial brief to final deliverables, we manage the full campaign lifecycle. Our talent delivers on time, on brief, and at the quality level you expect.",
                details: [
                  "Creative brief development",
                  "Content review and approval workflows",
                  "Deliverable scheduling and tracking",
                  "Performance reporting",
                ],
              },
              {
                num: "03",
                title: "Long-Term Sponsorships",
                desc: "The brands audiences trust most are the ones they see consistently — season after season. We structure multi-year deals that grow in value as the relationship deepens.",
                details: [
                  "Multi-year deal structuring",
                  "Season and event tie-ins",
                  "Milestone-based content calendars",
                  "Annual performance reviews",
                ],
              },
              {
                num: "04",
                title: "Career Development",
                desc: "We think beyond the next deal. Our talent relationships are built around long-term growth, positioning, and the kind of career moves that compound over time.",
                details: [
                  "Brand positioning strategy",
                  "Platform and audience growth",
                  "Opportunity vetting and sourcing",
                  "Cross-category expansion",
                ],
              },
            ].map((s) => (
              <div key={s.num} className="py-16 grid md:grid-cols-12 gap-12">
                <div className="md:col-span-1">
                  <p className="text-xs font-mono text-[#111111]/20 mt-1">{s.num}</p>
                </div>
                <div className="md:col-span-5">
                  <h2 className="text-2xl font-semibold text-[#111111] mb-4">{s.title}</h2>
                  <p className="text-sm text-[#111111]/50 leading-relaxed">{s.desc}</p>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/30 mb-5">Includes</p>
                  <ul className="space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-[#111111]/50">
                        <span className="text-[#111111]/20 shrink-0">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal partners */}
      <section className="py-28 px-8 border-b border-[#E0E0DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40">
                Ideal Partners
              </p>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl font-semibold tracking-tight text-[#111111]">Who we work with best</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#E0E0DE]">
            {[
              "Outdoor & adventure brands",
              "Athletic apparel & footwear",
              "Performance nutrition",
              "Wearable technology",
              "Gaming & esports brands",
              "Sports & fitness apps",
            ].map((cat) => (
              <div key={cat} className="bg-[#F6F6F4] px-10 py-8">
                <p className="text-sm font-medium text-[#111111]/70">{cat}</p>
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
              Let&apos;s Talk
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Have a campaign in mind?
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
