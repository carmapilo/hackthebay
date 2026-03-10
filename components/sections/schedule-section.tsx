"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";

export function ScheduleSection() {
  const { heading, subheading, days, planetName } = siteContent.schedule;
  const saturnSrc = siteContent.assets.saturn;
  const [isHovered, setIsHovered] = useState(false);
  const activeDay = days[0];

  return (
    <section
      id="schedule"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-amber-200">
          {heading}
        </p>
        <p className="-mt-2 text-center text-sm uppercase tracking-[0.3em] text-amber-100/70">
          {subheading}
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-center">
          {/* Schedule modal - LEFT on desktop */}
          <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-amber-400/50 bg-linear-to-br from-amber-950/60 via-slate-900/75 to-slate-950/70 p-6 text-white shadow-2xl backdrop-blur">
            <div className="rounded-xl border border-amber-400/30 bg-black/30 p-5">
              <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-bold text-amber-200">
                  {activeDay.label}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-100/70">
                  {activeDay.date}
                </span>
              </div>
              <div className="space-scrollbar mt-4 max-h-80 space-y-3 overflow-y-auto pr-3">
                {activeDay.items.map((item) => (
                  <div
                    key={`${item.time}-${item.title}`}
                    className="flex flex-col gap-1 rounded-lg border border-amber-200/20 bg-amber-500/5 px-4 py-3"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-amber-100/70">
                      {item.time}
                    </span>
                    <span className="text-base font-semibold text-amber-50">
                      {item.title}
                    </span>
                    <span className="text-sm text-amber-100/80">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Saturn planet - RIGHT on desktop */}
          <motion.div
            className="relative z-0 flex h-80 w-80 shrink-0 items-center justify-center md:-ml-16 md:h-[26rem] md:w-[26rem] lg:-ml-28 lg:h-[30rem] lg:w-150"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0">
              <Image
                src={saturnSrc}
                alt={planetName}
                fill
                className="object-contain"
              />
            </div>
            <motion.span
              className="absolute right-2 top-2 rotate-12 text-sm uppercase tracking-[0.25em] text-amber-100/80"
              animate={{ scale: isHovered ? 1.05 : 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {planetName}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
