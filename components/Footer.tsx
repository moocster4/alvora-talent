import Link from "next/link";
import { ATMonogram } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F4] border-t border-[#E0E0DE]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <ATMonogram className="w-8 h-auto mb-4" />
            <p className="text-sm text-[#111111]/40 max-w-xs leading-relaxed">
              A modern management firm representing creators, athletes, and gamers.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/30 mb-5">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-[#111111]/50 hover:text-[#111111] transition-colors duration-200">About</Link>
              <Link href="/services" className="text-sm text-[#111111]/50 hover:text-[#111111] transition-colors duration-200">Services</Link>
              <Link href="/contact" className="text-sm text-[#111111]/50 hover:text-[#111111] transition-colors duration-200">Contact</Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/30 mb-5">Contact</p>
            <a href="mailto:hello@alvoratalent.com" className="text-sm text-[#111111]/50 hover:text-[#111111] transition-colors duration-200">
              hello@alvoratalent.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E0E0DE] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#111111]/30">© {new Date().getFullYear()} Alvora Talent. All rights reserved.</p>
          <p className="text-xs text-[#111111]/30">alvoratalent.com</p>
        </div>
      </div>
    </footer>
  );
}
