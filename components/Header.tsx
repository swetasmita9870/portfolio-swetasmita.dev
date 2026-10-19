"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="section-container pt-4">
        <div
          className={`flex h-14 items-center justify-between rounded-full border px-4 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-white/15 bg-ink/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]"
              : "border-line bg-ink/60"
          }`}
        >
          <Link href="/" className="display text-xl leading-none text-ivory">
            {site.shortName}
            <span className="text-gold">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-[13px] text-ivory-muted transition hover:bg-white/5 hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-ivory px-4 py-1.5 text-[13px] font-medium text-ink transition hover:bg-white"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-line p-2 text-ivory md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="section-container pt-2 md:hidden">
          <nav className="surface-panel flex flex-col gap-1 p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm text-ivory-muted hover:bg-ink-soft hover:text-ivory"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-xl bg-ivory px-3 py-2.5 text-center text-sm font-medium text-ink"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
