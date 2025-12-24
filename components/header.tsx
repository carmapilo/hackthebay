"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  //   { href: "#earth", label: "Where" },
  { href: "#speakers", label: "Speakers" },
  { href: "#mars", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#apply", label: "Apply" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur transition-transform duration-300 ${
        open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {!open && (
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          <Link
            href="#hero"
            className="text-sm font-bold uppercase tracking-[0.25em] rounded px-3 py-2 transition hover:bg-white/5 hover:text-cyan-200"
          >
            Hack The Bay
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-2 transition hover:bg-white/5 hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 text-white">
              <Link
                href="https://www.instagram.com/hackthebay2026/"
                aria-label="Instagram"
                className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
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
                className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icons/discord.svg"
                  alt="Discord"
                  className="h-5 w-5"
                />
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded md:hidden hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <img src="/icons/hamburger.svg" alt="Menu" className="h-5 w-5" />
          </button>
        </nav>
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-screen w-[70vw] flex-col bg-black/90 px-6 py-10 text-white transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <button
          className="self-end rounded px-3 py-2 text-sm font-semibold hover:bg-white/5"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <img src="/icons/x.svg" alt="Close" className="h-5 w-5" />
        </button>
        <div className="mt-6 flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.18em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-2 transition hover:bg-white/5 hover:text-cyan-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Link
            href="https://www.instagram.com/hackthebay2026/"
            aria-label="Instagram"
            className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </Link>
          <Link
            href="#"
            aria-label="Discord"
            className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <img src="/icons/discord.svg" alt="Discord" className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
