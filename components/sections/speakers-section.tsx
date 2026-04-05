"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";

export function SpeakersSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="speakers"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-orange-200">
          CTF Tournament
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-10 md:flex-row md:items-center">
          {/* Mars Planet */}
          <motion.div
            className="relative order-1 flex h-60 w-60 shrink-0 items-center justify-center md:order-2 md:h-72 md:w-72 lg:h-86 lg:w-86"
            animate={{
              scale: isHovered ? 1.1 : 1,
              x: 0,
            }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src={siteContent.assets.mars}
                alt="Mars"
                fill
                className="object-cover"
              />
            </div>

            <motion.span
              className="absolute right-1 top-1 -rotate-320 text-sm uppercase tracking-[0.25em] text-orange-100/80 md:right-2 md:top-2"
              animate={{ scale: isHovered ? 1.06 : 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              Mars
            </motion.span>
          </motion.div>

          {/* CTF Info Card */}
          <div className="relative z-10 order-2 w-full max-w-lg -mt-6 rounded-xl border border-orange-400/60 bg-slate-900/70 p-6 text-white backdrop-blur md:order-1 md:static md:mt-0 md:translate-y-0">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-orange-200">
              CTF Tournament
            </h2>
            <p className="mt-4 text-base leading-relaxed text-orange-50/90">
              Powered by{" "}
              <span className="font-semibold text-amber-300">WhiteHatters</span>{" "}
              and{" "}
              <span className="font-semibold text-amber-300">Cyber Herd</span>,
              the CTF Tournament is a high-stakes cybersecurity competition
              featuring both red team and blue team challenges. Participants
              will think like attackers and defenders while tackling real-world
              scenarios across web exploitation, cryptography, reverse
              engineering, and forensics as part of your Hack the Bay mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
