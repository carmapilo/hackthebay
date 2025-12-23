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
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {siteContent.earth.heading}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:items-center">
          <motion.div
            className="relative h-72 w-72 shrink-0 md:h-86 md:w-86"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="h-full w-full rounded-full bg-linear-to-br from-green-300 via-green-500 to-green-700" />
              <motion.div
                className="absolute inset-0 rounded-full bg-white/25"
                animate={{ opacity: isHovered ? 0 : 0.25 }}
                transition={{ duration: 0.25 }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_45%)]" />
            </div>

            <motion.span
              className="absolute left-1/2 text-sm uppercase tracking-[0.25em] text-cyan-100/80"
              style={{ bottom: "-22px", transform: "translateX(-50%)" }}
              animate={{ scale: isHovered ? 1.06 : 1, y: isHovered ? 10 : 6 }}
              transition={{ duration: 0.25 }}
            >
              Earth
            </motion.span>
          </motion.div>

          <div className="w-full max-w-lg rounded-xl border border-cyan-400/60 bg-slate-900/70 p-6 text-white backdrop-blur">
            <h2 className="text-2xl font-bold text-cyan-300">{heading}</h2>
            <p className="mt-3 text-base text-cyan-100/90">{body}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/80">
              <span className="rounded border border-cyan-300/40 px-3 py-2 text-center">
                Tampa • FL
              </span>
              <span className="rounded border border-cyan-300/40 px-3 py-2 text-center">
                Feb 28 - Mar 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
