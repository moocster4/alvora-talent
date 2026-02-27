import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Alvora Talent",
  description: "Get in touch with Alvora Talent to discuss brand partnerships, sponsorships, and representation.",
};

export default function Contact() {
  return (
    <main className="bg-[#F6F6F4]">

      {/* Hero */}
      <section data-hero className="relative overflow-hidden bg-[#111111] pt-32 pb-20 px-8 min-h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px", animation: "grid-drift 10s linear infinite" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)", animation: "wave-pulse 5s ease-in-out infinite" }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30 mb-8">
            Contact
          </p>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.02] max-w-3xl">
            Let&apos;s work together.
          </h1>
          <p className="text-white/40 text-lg font-light mt-6 max-w-xl">
            Whether you&apos;re a brand looking for the right partnership, or talent interested in representation — we respond to every inquiry.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-28 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">

          {/* Info */}
          <div className="md:col-span-4">
            <div className="space-y-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-3">Email</p>
                <a href="mailto:hello@alvoratalent.com" className="text-sm text-[#111111] hover:text-[#111111]/60 transition-colors duration-200">
                  hello@alvoratalent.com
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-3">Response Time</p>
                <p className="text-sm text-[#111111]/60">Within 48 hours</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-4">Best For</p>
                <ul className="space-y-3">
                  {[
                    "Brand partnership inquiries",
                    "Sponsorship discussions",
                    "Talent representation",
                    "Press & media",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#111111]/50">
                      <span className="text-[#111111]/20 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 md:col-start-6">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full border border-[#E0E0DE] bg-white px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111]/40 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border border-[#E0E0DE] bg-white px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111]/40 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@yourbrand.com"
                  className="w-full border border-[#E0E0DE] bg-white px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111]/40 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  placeholder="Your brand name"
                  className="w-full border border-[#E0E0DE] bg-white px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111]/40 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-2">
                  Inquiry Type
                </label>
                <select className="w-full border border-[#E0E0DE] bg-white px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111]/40 transition-colors duration-200">
                  <option value="">Select an option</option>
                  <option value="partnership">Brand partnership / sponsorship</option>
                  <option value="campaign">Campaign management</option>
                  <option value="representation">Talent representation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/40 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your brand, what you're looking to achieve, and any relevant details..."
                  className="w-full border border-[#E0E0DE] bg-white px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-[#111111]/40 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="text-xs font-medium uppercase tracking-[0.2em] text-white bg-[#111111] px-8 py-4 hover:bg-[#111111]/80 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
