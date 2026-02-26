import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Alvora Talent",
  description: "Alvora Talent is a talent agency representing creator-athletes who build authentic audiences through real achievement.",
};

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">// About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-2xl">
            We believe in talent that earns its audience.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">// Our Story</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Built around a different kind of creator.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Alvora Talent was founded on a simple belief: the most compelling creators are the ones who are genuinely doing something remarkable — and just happen to be filming it.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                We represent creator-athletes who have built audiences by achieving things most people can&apos;t imagine: summiting the world&apos;s most dangerous peaks, competing at the highest levels of their sport, and documenting every raw, unfiltered moment along the way.
              </p>
              <p className="text-gray-500 leading-relaxed">
                That authenticity is rare — and brands that partner with our talent don&apos;t just get impressions. They get trust.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-3">// Our Mission</p>
                <p className="text-gray-700 leading-relaxed">
                  To represent and grow a select group of creator-athletes whose work connects brands to the audiences they&apos;re trying to reach — authentically, at scale.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-3">// Our Approach</p>
                <p className="text-gray-700 leading-relaxed">
                  We keep our roster intentionally small. Every talent relationship is hands-on, and every brand partnership is built to last — not just to check a box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">// What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                title: "Long-term Thinking",
                desc: "We build careers, not campaigns. The best brand partnerships are the ones that grow year over year.",
              },
              {
                title: "Athlete First",
                desc: "Our talent&apos;s performance and wellbeing always comes before any brand deal. Period.",
              },
              {
                title: "Earned Audience",
                desc: "Every follower of our talent chose to be there because of what they witnessed. That&apos;s rare and valuable.",
              },
              {
                title: "Brand Fit Matters",
                desc: "We decline partnerships that don&apos;t fit. Our talent&apos;s credibility is worth more than any short-term revenue.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-7">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-5">
            Interested in working with us?
          </h2>
          <p className="text-gray-500 mb-8">Whether you&apos;re a brand or a creator, we&apos;d love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
