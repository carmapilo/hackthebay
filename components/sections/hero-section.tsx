"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";

export function HeroSection() {
  const { title, subtitle, cta, ctaHref } = siteContent.hero;

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6">
      <motion.div
        className="absolute h-140 w-140 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffd700, #ffa500)",
          boxShadow:
            "0 0 60px 20px rgba(255, 215, 0, 0.2), 0 0 120px 60px rgba(255, 165, 0, 0.18)",
          top: "-20rem",
        }}
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-hidden
      />

      <div className="relative z-10 max-w-3xl text-center text-white pt-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-200">
          Tampa, Florida • 24-Hour Build
        </p>
        <h1 className="text-5xl font-black sm:text-6xl md:text-7xl">{title}</h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
          Space Theme • 2026 Edition
        </div>
        <p className="mt-6 text-lg text-cyan-100/80 sm:text-xl">{subtitle}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={ctaHref}
            className="rounded-full bg-cyan-400 px-8 py-3 text-lg font-bold text-black shadow-lg transition hover:scale-105 hover:shadow-cyan-400/40"
          >
            {cta}
          </a>
          <a
            href="#about"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100 hover:text-cyan-300"
          >
            Explore the System ↓
          </a>
        </div>
      </div>
    </section>
  );
}
