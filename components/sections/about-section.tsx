"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";

export function AboutSection() {
  const { about, assets } = siteContent;
  const [mercuryHovered, setMercuryHovered] = useState(false);
  const [venusHovered, setVenusHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-visible px-6 p-4"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-10 text-center">
        <p className="text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {about.title}
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-center">
          {/* Mercury - top */}
          <motion.div
            className="relative flex flex-col items-center gap-2 md:-translate-y-16"
            animate={{ scale: mercuryHovered ? 1.08 : 1 }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setMercuryHovered(true)}
            onMouseLeave={() => setMercuryHovered(false)}
          >
            <div className="relative h-30 w-30 shrink-0 rounded-full shadow-[0_0_30px_8px_rgba(200,200,200,0.15)]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src={assets.mercury}
                  alt="Mercury"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.span
                className="absolute left-[-20px] top-[-20px] -rotate-30 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90"
                animate={{ scale: mercuryHovered ? 1.06 : 1 }}
                transition={{ duration: 0.25 }}
              >
                Mercury
              </motion.span>
            </div>
          </motion.div>

          {/* Hologram card */}
          <div className="relative w-full max-w-xl">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/60 bg-slate-900/70 p-8 text-white backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,215,0,0.08),transparent_30%)]" />
              <div className="relative space-y-4">
                <p className="text-base text-cyan-50/90">
                  <span className="font-semibold text-amber-300">
                    Hack the Bay: Launch
                  </span>{" "}
                  is a 12-hour hackathon on{" "}
                  <span className="font-semibold text-amber-300">
                    Saturday, April 11th
                  </span>{" "}
                  at the{" "}
                  <span className="font-semibold text-amber-300">
                    University of South Florida
                  </span>
                  . Build, learn, and ship alongside Tampa&apos;s most driven
                  student developers.
                </p>
                <p className="text-base text-cyan-50/90">
                  This spring event kicks off something bigger, the full{" "}
                  <span className="font-semibold text-amber-300">
                    Hack the Bay
                  </span>{" "}
                  hackathon returns in Fall 2026. Consider this your launchpad.
                </p>
              </div>
            </div>
          </div>

          {/* Venus - bottom */}
          <motion.div
            className="relative flex flex-col items-center gap-2 md:translate-y-16"
            animate={{ scale: venusHovered ? 1.08 : 1 }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setVenusHovered(true)}
            onMouseLeave={() => setVenusHovered(false)}
          >
            <div className="relative h-30 w-30 shrink-0 rounded-full shadow-[0_0_40px_10px_rgba(255,165,0,0.18)]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src={assets.venus}
                  alt="Venus"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.span
                className="absolute left-[-20px] top-[-20px] -rotate-30 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90"
                animate={{ scale: venusHovered ? 1.06 : 1 }}
                transition={{ duration: 0.25 }}
              >
                Venus
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
