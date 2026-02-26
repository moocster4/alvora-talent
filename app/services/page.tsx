import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Alvora Talent",
  description: "Brand partnerships, campaign management, and long-term sponsorships with world-class creator-athletes.",
};

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">// Services</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-2xl">
            How we work with brands.
          </h1>
        </div>
      </section>

      {/* Main services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Brand Partnerships",
                desc: "We match brands with the right creator based on audience alignment, content fit, and shared values. This isn't about reach alone — it's about finding a partner whose audience will actually care about what you're selling.",
                details: [
                  "Audience demographic analysis",
                  "Brand-talent alignment assessment",
                  "Negotiation and contract management",
                  "Exclusivity and category rights",
                ],
              },
              {
                number: "02",
                title: "Campaign Management",
                desc: "From initial brief to final deliverables, we manage the full campaign lifecycle so you don't have to chase anyone down. Our talent delivers on time, on brief, and at the quality level you expect.",
                details: [
                  "Creative brief development",
                  "Content review and approval workflows",
                  "Deliverable scheduling and tracking",
                  "Performance reporting",
                ],
              },
              {
                number: "03",
                title: "Long-Term Sponsorships",
                desc: "The brands our talent's audiences trust most are the ones they see consistently — season after season. We structure multi-year deals that grow in value as the relationship deepens.",
                details: [
                  "Multi-year deal structuring",
                  "Season and expedition tie-ins",
                  "Milestone-based content calendars",
                  "Annual performance reviews",
                ],
              },
              {
                number: "04",
                title: "Product Integration",
                desc: "Our talent doesn't just mention products — they use them in the field. When Ryan Mitchell films a summit attempt with your gear, that's not an ad. That's a real-world proof of concept that your customers will remember.",
                details: [
                  "Organic product use in content",
                  "Expedition and event documentation",
                  "Behind-the-scenes gear features",
                  "Authentic testimonials",
                ],
              },
            ].map((s) => (
              <div key={s.number} className="border border-gray-100 rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-xs font-mono text-gray-300 mt-1">{s.number}</span>
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{s.title}</h2>
                    </div>
                    <p className="text-gray-500 leading-relaxed ml-8">{s.desc}</p>
                  </div>
                  <div className="ml-8 md:ml-0">
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">Includes</p>
                    <ul className="space-y-2.5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="text-gray-300 mt-0.5">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">// Ideal Partners</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Who we work with best</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              "Outdoor & adventure brands",
              "Athletic apparel & footwear",
              "Performance nutrition",
              "Wearable technology",
              "Expedition gear",
              "Sports & fitness apps",
            ].map((cat) => (
              <div key={cat} className="bg-white border border-gray-100 rounded-xl px-6 py-5">
                <p className="text-sm font-medium text-gray-700">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">// Let&apos;s Talk</p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Have a campaign in mind?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Send us a brief or just an introduction — we respond to every inquiry.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
