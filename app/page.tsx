import { LogoMark } from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <LogoMark className="w-10 h-10 mb-6 opacity-80" dark />

      <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30 mb-3">
        // Talent Agency
      </p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Alvora Talent
      </h1>
      <p className="text-white/40 text-base mb-12 max-w-sm">
        Site under construction — something great is coming.
      </p>

      {/* Contact */}
      <div className="border border-white/10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row gap-6 items-center">
        <div className="text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-1">// Contact</p>
          <a href="mailto:logan@alvoratalent.com" className="block text-sm text-white/70 hover:text-white transition-colors">
            logan@alvoratalent.com
          </a>
          <a href="mailto:matt@alvoratalent.com" className="block text-sm text-white/70 hover:text-white transition-colors">
            matt@alvoratalent.com
          </a>
        </div>
      </div>

      <p className="mt-10 text-xs text-white/20">© {new Date().getFullYear()} Alvora Talent</p>
    </main>
  );
}
