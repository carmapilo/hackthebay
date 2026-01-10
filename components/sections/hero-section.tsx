"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";

export function HeroSection() {
  const { title, subtitle, cta, ctaHref } = siteContent.hero;
  const sunSrc = siteContent.assets.sun;

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6">
      {/* SUN: Adjust size with w-[X] h-[X], position with top. Negative top = higher up */}
      <motion.div
        className="absolute h-[70rem] w-[70rem]"
        style={{
          top: "-26rem",
          transform: "translateX(-50%)",
          filter:
            "drop-shadow(0 0 80px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 150px rgba(255, 165, 0, 0.3))",
        }}
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-hidden
      >
        <Image src={sunSrc} alt="" fill className="object-contain" priority />
      </motion.div>

      {/* Dark vignette overlay for text contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center pt-24">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            textShadow:
              "0 0 20px rgba(255,200,50,0.9), 0 0 40px rgba(255,165,0,0.6), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Tampa, Florida • 24-Hour Build
        </motion.p>

        <motion.h1
          className="text-5xl font-black sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            color: "#1a1a1a",
            textShadow:
              "0 0 40px rgba(255,215,0,1), 0 0 80px rgba(255,200,50,0.9), 0 0 120px rgba(255,165,0,0.7), 0 4px 12px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px rgba(255,220,80,0.5)",
          }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Space Theme • 2026 Edition
        </motion.div>

        <motion.p
          className="mt-6 text-lg text-white/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href={ctaHref}
            className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 text-lg font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-400/50"
          >
            {cta}
          </a>
          <a
            href="#about"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100/90 transition hover:text-amber-300"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}
          >
            Explore the System ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
