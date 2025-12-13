"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";

export function EarthSection() {
  const { heading, body } = siteContent.earth;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="earth"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center md:flex-col">
        <p className="relative z-20 mb-10 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {siteContent.earth.heading}
        </p>

        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative h-64 w-64 shrink-0 md:h-72 md:w-72"
            animate={{
              scale: isHovered ? 1.8 : 1,
              x: isHovered ? -40 : 0,
            }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="h-full w-full rounded-full bg-linear-to-br from-blue-400 via-blue-600 to-blue-800" />
              <motion.div
                className="absolute inset-0 rounded-full bg-white/25"
                animate={{ opacity: isHovered ? 0 : 0.25 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_45%)]" />
            </div>

            <motion.span
              className="absolute left-1/2 text-sm uppercase tracking-[0.25em] text-cyan-100/80"
              style={{ bottom: "-22px", transform: "translateX(-50%)" }}
              animate={{ scale: isHovered ? 1.12 : 1, y: isHovered ? 14 : 8 }}
              transition={{ duration: 0.35 }}
            >
              Earth
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 w-full max-w-md -translate-y-1/2 rounded-xl border border-cyan-400/60 bg-slate-900/70 p-6 text-white backdrop-blur"
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 220 : 260,
              pointerEvents: isHovered ? "auto" : "none",
            }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-2xl font-bold text-cyan-300">{heading}</h2>
            <p className="mt-3 text-base text-cyan-100/90">{body}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/80">
              <span className="rounded border border-cyan-300/40 px-3 py-2 text-center">
                Tampa • FL
              </span>
              <span className="rounded border border-cyan-300/40 px-3 py-2 text-center">
                March 15–16
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
