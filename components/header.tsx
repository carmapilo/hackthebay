"use client";

import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#earth", label: "Where" },
  { href: "#mars", label: "Tracks" },
  { href: "#faq", label: "FAQ" },
  { href: "#apply", label: "Apply" },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#hero"
          className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200"
        >
          Hack The Bay
        </Link>
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-2 transition hover:text-cyan-200 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-white">
            <Link
              href="https://www.instagram.com/hackthebay2026/"
              aria-label="Instagram"
              className="rounded p-2 transition hover:text-cyan-200 hover:bg-white/5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="h-5 w-5"
              />
            </Link>
            <Link
              href="#"
              aria-label="Discord"
              className="rounded p-2 transition hover:text-cyan-200 hover:bg-white/5"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/discord.svg" alt="Discord" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
