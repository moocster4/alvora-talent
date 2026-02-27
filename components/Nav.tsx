"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setVisible(true);

    const hero = document.querySelector("[data-hero]");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: `-64px 0px 0px 0px` }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E0E0DE] transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/about" className="text-xs font-medium uppercase tracking-[0.15em] text-[#111111]/40 hover:text-[#111111] transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="text-xs font-medium uppercase tracking-[0.15em] text-[#111111]/40 hover:text-[#111111] transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-xs font-medium uppercase tracking-[0.15em] text-[#111111]/40 hover:text-[#111111] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#111111]/40 hover:text-[#111111] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E0E0DE] bg-white px-8 py-6 flex flex-col gap-5">
          <Link href="/about" className="text-xs font-medium uppercase tracking-[0.15em] text-[#111111]/50" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" className="text-xs font-medium uppercase tracking-[0.15em] text-[#111111]/50" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" className="text-xs font-medium uppercase tracking-[0.15em] text-[#111111]/50" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
