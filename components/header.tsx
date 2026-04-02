"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  // { href: "#about", label: "About" },
  { href: "#location", label: "Where" },
  // { href: "#speakers", label: "Speakers" },
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  // { href: "#faq", label: "FAQ" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#apply", label: "Register" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const handleSectionLinkClick = (href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
        open ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 90%, transparent 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      {!open && (
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          <Link
            href="#hero"
            className="text-sm text-cyan-200 font-bold uppercase tracking-[0.25em] rounded px-3 py-2 transition hover:bg-white/5 hover:text-white"
          >
            Hack The Bay
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-2 transition hover:bg-white/5 hover:text-cyan-200"
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionLinkClick(link.href);
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-3 text-white md:flex">
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
              href="https://discord.gg/YGREE8saUm"
              aria-label="Discord"
              className="rounded p-2 transition hover:bg-white/5 hover:text-cyan-200"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/discord.svg" alt="Discord" className="h-5 w-5" />
            </Link>
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
              onClick={(event) => {
                event.preventDefault();
                handleSectionLinkClick(link.href);
                setOpen(false);
              }}
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
