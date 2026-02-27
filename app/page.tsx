export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-3">
          // Talent Agency
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
          Alvora Talent
        </h1>

        {/* Summary */}
        <p className="text-white/50 text-base max-w-md leading-relaxed mb-3">
          We represent a curated roster of creators across gaming, athletics, and adventure, connecting authentic talent with brands built to last.
        </p>
        <p className="text-white/30 text-sm mb-12">
          Site under construction — something great is coming.
        </p>

        {/* Contact */}
        <div className="border border-white/10 rounded-2xl px-8 py-6">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-3">// Get In Touch</p>
          <a href="mailto:hello@alvoratalent.com" className="block text-sm text-white/60 hover:text-white transition-colors">
            hello@alvoratalent.com
          </a>
        </div>

        <p className="mt-10 text-xs text-white/20">© {new Date().getFullYear()} Alvora Talent</p>
      </div>
    </main>
  );
}
