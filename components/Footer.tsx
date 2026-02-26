import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Logo className="mb-3" />
            <p className="text-sm text-gray-500 max-w-xs">
              Representing world-class creators and athletes who are redefining what it means to build an audience.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">Company</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
                <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">Contact</p>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:info@alvoratalent.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  info@alvoratalent.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Alvora Talent. All rights reserved.</p>
          <p className="text-xs text-gray-400">alvoratalent.com</p>
        </div>
      </div>
    </footer>
  );
}
