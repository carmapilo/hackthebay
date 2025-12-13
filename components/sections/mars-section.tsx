"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { siteContent, type Track } from "@/content/siteContent";

export function MarsSection() {
  const tracks = useMemo(() => siteContent.mars.tracks, []);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track["id"]>("fintech");
  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) ?? tracks[0];

  return (
    <section
      id="mars"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center md:flex-col">
        <p className="relative z-20 mb-10 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-orange-200">
          {siteContent.mars.heading}
        </p>

        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative flex h-64 w-64 shrink-0 items-center justify-center md:h-72 md:w-72"
            animate={{
              scale: isHovered ? 1.8 : 1,
              x: isHovered ? -50 : 0,
            }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 overflow-hidden rounded-full bg-linear-to-br from-red-500 via-orange-600 to-red-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_45%)]" />

            <div className="relative z-10 h-full w-full">
              {tracks.map((track, index) => {
                const count = Math.max(tracks.length, 1);
                const radius = 85;
                const angle = -90 + (index * 360) / count; // start at top
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                const isActive = selectedTrack === track.id;

                return (
                  <motion.button
                    key={track.id}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedTrack(track.id);
                    }}
                    className={`absolute h-12 w-12 rounded-full text-sm font-bold transition ${
                      isActive
                        ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/40 scale-110"
                        : "bg-white text-black hover:bg-cyan-200"
                    }`}
                    style={{
                      left: "42%",
                      top: "42%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ x, y }}
                    animate={{ x, y }}
                    whileHover={{ scale: 1.12, x, y }}
                    whileTap={{ scale: 0.95, x, y }}
                    aria-label={track.title}
                  >
                    {index + 1}
                  </motion.button>
                );
              })}
            </div>

            <motion.span
              className="absolute left-1/2 text-sm uppercase tracking-[0.25em] text-orange-100/80"
              style={{ bottom: "-22px", transform: "translateX(-50%)" }}
              animate={{ scale: isHovered ? 1.12 : 1, y: isHovered ? 14 : 8 }}
              transition={{ duration: 0.35 }}
            >
              Mars
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/2 w-full max-w-md -translate-y-1/2 rounded-xl border border-orange-400/60 bg-slate-900/70 p-6 text-white backdrop-blur"
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 220 : 260,
              pointerEvents: isHovered ? "auto" : "none",
            }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-2xl font-bold text-orange-300">
              {activeTrack.title}
            </h2>
            <p className="mt-3 text-base text-orange-50/90">
              {activeTrack.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
