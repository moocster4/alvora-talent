import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function Home() {
  return (
    <main>
      {/* Hero — pure dark, no images */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <div className="flex justify-center mb-8">
            <LogoMark className="w-12 h-12 opacity-80" dark />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-4">
            // Talent Agency
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Alvora Talent
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 font-light">
            We represent the world&apos;s most authentic creators — athletes and storytellers who build audiences through real achievement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Work With Our Talent
            </Link>
            <Link
              href="/about"
              className="border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-white/50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">// Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Athlete First.<br />Creator Second.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Alvora Talent manages a select roster of creator-athletes who have built loyal audiences around authentic achievement — not manufactured content. We connect them with brands that share that same commitment to excellence.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our talent doesn&apos;t just post — they document. Every expedition, every summit, every failure. Their audiences follow because they can&apos;t look away.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Combined Reach", value: "500K+" },
                { label: "Total Views", value: "120M+" },
                { label: "Years Active", value: "Est. 2024" },
                { label: "Focus", value: "Adventure" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured talent */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-3">// Our Roster</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured Talent</h2>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">// Mountaineer &amp; Creator</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ryan Mitchell</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Ryan summited Mount Everest and later attempted K2. He documents every stage of his expeditions through raw, behind-the-scenes footage — transforming high-risk alpine climbs into serialized YouTube content with 120M+ views.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { platform: "YouTube", count: "336K+" },
                    { platform: "YouTube", count: "56K+" },
                    { platform: "Instagram", count: "57K+" },
                  ].map((p, i) => (
                    <div key={i} className="bg-[#fce8e8] rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 mb-1">{p.platform}</p>
                      <p className="text-xl font-bold text-gray-900">{p.count}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Inquire about partnership
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              {/* Dark panel — placeholder for talent photo */}
              <div className="relative min-h-80 md:min-h-full bg-gray-950 flex items-center justify-center">
                <LogoMark className="w-16 h-16 opacity-10" dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">// What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Built for Brands That Mean It</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Brand Partnerships",
                desc: "We match your brand with talent whose audience, values, and content naturally align with what you're building.",
              },
              {
                title: "Campaign Management",
                desc: "End-to-end campaign execution — from brief to deliverables — so your partnership actually performs.",
              },
              {
                title: "Long-Term Sponsorships",
                desc: "The best brand-creator relationships are built over time. We facilitate multi-season partnerships that compound.",
              },
            ].map((s) => (
              <div key={s.title} className="border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-6">// Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to partner with exceptional talent?
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Tell us about your brand and we&apos;ll find the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
