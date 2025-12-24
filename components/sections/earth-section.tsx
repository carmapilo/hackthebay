"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { siteContent } from "@/content/siteContent";

export function EarthSection() {
  const { body, heading } = siteContent.earth;
  const [isHovered, setIsHovered] = useState(false);
  const targetDate = useMemo(
    () => new Date("2026-02-28T09:00:00-05:00"), // update to your event start
    []
  );

  const computeTimeLeft = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(computeTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(computeTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [computeTimeLeft]);

  return (
    <section
      id="earth"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {heading}
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-10 md:flex-row md:items-center">
          <motion.div
            className="relative h-56 w-56 shrink-0 md:h-72 md:w-72 lg:h-86 lg:w-86"
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
              className="absolute left-1 top-1 -rotate-40 text-sm uppercase tracking-[0.25em] text-cyan-100/80 md:left-2 md:top-2"
              animate={{ scale: isHovered ? 1.06 : 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              Earth
            </motion.span>
          </motion.div>

          <div className="relative z-10 w-full max-w-lg -mt-6 rounded-xl border border-cyan-400/60 bg-slate-900/70 p-6 text-white backdrop-blur md:static md:mt-0 md:translate-y-0">
            <p className="mt-3 text-base text-cyan-100/90">{body}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.18em] text-cyan-200/80">
              <span className="rounded border border-cyan-300/40 px-3 py-2 text-center">
                Tampa • FL
              </span>
              <span className="rounded border border-cyan-300/40 px-3 py-2 text-center">
                Feb 28 - Mar 1
              </span>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-center gap-3 pt-6">
              <div className="flex items-center gap-2 rounded border border-cyan-300/40 bg-white/5 px-3 py-2 text-sm font-bold text-cyan-50">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
              </div>
              <span className="text-[11px] uppercase tracking-[0.15em] text-cyan-100/70">
                Until launch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
