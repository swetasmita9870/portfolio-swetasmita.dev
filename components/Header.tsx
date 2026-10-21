"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight text-ivory">
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-ivory-muted transition hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-3.5 py-1.5 text-[13px] font-medium text-ink transition hover:-translate-y-0.5 hover:bg-white"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center text-ivory md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="section-container flex flex-col gap-1 border-t border-white/10 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-sm text-ivory-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-sm text-ivory"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
