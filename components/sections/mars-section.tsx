"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { siteContent, type Track } from "@/content/siteContent";

export function MarsSection() {
  const tracks = useMemo(() => siteContent.mars.tracks, []);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track["id"]>("fintech");
  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) ?? null;

  // Replace these placeholder asset paths with your downloaded track icons.
  // Place files in /public/tracks and update the filenames below.
  const trackIcons: Record<Track["id"], string> = {
    fintech: "/tracks/fintech.png",
    cybersecurity: "/tracks/cybersecurity.png",
    automation: "/tracks/automation.png",
    health: "/tracks/health.png",
    sustainability: "/tracks/sustainability.png",
  };

  return (
    <section
      id="mars"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-orange-200">
          {siteContent.mars.heading}
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-10 md:flex-row md:items-center">
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
            <div className="absolute inset-0 overflow-hidden rounded-full bg-linear-to-br from-red-500 via-orange-600 to-red-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_45%)]" />

            <div className="relative z-10 h-full w-full">
              {tracks.map((track, index) => {
                const count = Math.max(tracks.length, 1);
                const radius = 100;
                const angle = -90 + (index * 360) / count; // start at top
                const x = Math.cos((angle * Math.PI) / 180) * radius - 25;
                const y = Math.sin((angle * Math.PI) / 180) * radius - 25;

                const isActive = selectedTrack === track.id;
                const iconSrc = trackIcons[track.id];

                return (
                  <motion.button
                    key={track.id}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedTrack(track.id);
                    }}
                    className="absolute flex h-16 w-16 items-center justify-center transition"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ x, y }}
                    animate={{ x, y, scale: isActive ? 1.3 : 1 }}
                    whileHover={{ scale: 1.3, x, y }}
                    whileTap={{ scale: 0.98, x, y }}
                    aria-label={track.title}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-yellow-300/60 blur-sm" />
                    )}
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt={track.title}
                        width={80}
                        height={80}
                        className="object-contain"
                        priority={index === 0}
                      />
                    ) : (
                      <span className="text-xs font-bold text-white">
                        {index + 1}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <motion.span
              className="absolute right-1 top-1 -rotate-320 text-sm uppercase tracking-[0.25em] text-orange-100/80 md:right-2 md:top-2"
              animate={{ scale: isHovered ? 1.06 : 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              Mars
            </motion.span>
          </motion.div>

          <div className="relative z-10 order-2 w-full max-w-lg -mt-6 rounded-xl border border-orange-400/60 bg-slate-900/70 p-6 text-white backdrop-blur md:order-1 md:static md:mt-0 md:translate-y-0">
            <h2 className="text-2xl font-bold text-orange-300">
              {activeTrack ? activeTrack.title : "Click a track to learn more"}
            </h2>
            <p className="mt-3 text-base text-orange-50/90">
              {activeTrack
                ? activeTrack.description
                : "Click on a track to learn more about it!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
