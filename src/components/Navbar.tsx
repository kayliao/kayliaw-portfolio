"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900 hover:text-sky-600 transition">
          KayLiaw
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-sky-500 transition">{t.nav.home}</Link>
          <Link href="/resume" className="hover:text-sky-500 transition">{t.nav.resume}</Link>
          <Link href="/projects" className="hover:text-sky-500 transition">{t.nav.projects}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/kayliao?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition hover:scale-110">
            <img src="navbar/github.png" className="w-5 h-5" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/%E5%AE%A5%E7%91%84-%E5%BB%96-18538a1b7/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition hover:scale-110">
            <img src="navbar/linkedin.png" className="w-5 h-5" alt="LinkedIn" />
          </a>
          <LanguageSwitcher />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-3 px-4 pb-4 pt-2 text-slate-700">
          <Link href="/" onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 hover:bg-sky-100 transition">{t.nav.home}</Link>
          <Link href="/resume" onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 hover:bg-sky-100 transition">{t.nav.resume}</Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 hover:bg-sky-100 transition">{t.nav.projects}</Link>
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-3">
              <a href="https://github.com/kayliao?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src="navbar/github.png" className="w-5 h-5" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/%E5%AE%A5%E7%91%84-%E5%BB%96-18538a1b7/" target="_blank" rel="noopener noreferrer">
                <img src="navbar/linkedin.png" className="w-5 h-5" alt="LinkedIn" />
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}