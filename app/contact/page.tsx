import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Alvora Talent",
  description: "Get in touch with Alvora Talent to discuss brand partnerships, sponsorships, and creator campaigns.",
};

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">// Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-xl">
            Let&apos;s work together.
          </h1>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - info */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-6">// Reach Out</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                We respond to every inquiry.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Whether you&apos;re a brand looking for the right creator partnership, or a creator-athlete interested in representation — we&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">// Email</p>
                  <a href="mailto:info@alvoratalent.com" className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                    info@alvoratalent.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">// Response Time</p>
                  <p className="text-gray-700">Within 48 hours</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">// Best For</p>
                  <ul className="space-y-2">
                    {[
                      "Brand partnership inquiries",
                      "Sponsorship discussions",
                      "Creator representation",
                      "Press & media",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <span className="text-gray-300">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right - form */}
            <div>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@yourbrand.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="Your brand name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                    What are you looking for?
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-400 transition-colors bg-white">
                    <option value="">Select an option</option>
                    <option value="partnership">Brand partnership / sponsorship</option>
                    <option value="campaign">Campaign management</option>
                    <option value="representation">Creator representation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your brand, what you're looking to achieve, and any relevant details about your campaign..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We&apos;ll get back to you within 48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
