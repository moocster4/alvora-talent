"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
            Work With Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/about" className="text-sm text-gray-700" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" className="text-sm text-gray-700" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-900" onClick={() => setOpen(false)}>Work With Us</Link>
        </div>
      )}
    </header>
  );
}
