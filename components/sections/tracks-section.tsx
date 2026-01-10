"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { siteContent, type Track } from "@/content/siteContent";

export function TracksSection() {
  const tracks = useMemo(() => siteContent.tracks.tracks, []);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track["id"]>("fintech");
  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) ?? null;

  // Track icons - update paths as needed
  const trackIcons: Record<Track["id"], string> = {
    fintech: "/tracks/fintech.png",
    cybersecurity: "/tracks/cybersecurity.png",
    automation: "/tracks/automation.png",
    health: "/tracks/health.png",
    sustainability: "/tracks/sustainability.png",
  };

  return (
    <section
      id="tracks"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-amber-200">
          {siteContent.tracks.heading}
        </p>

        {/* Layout: Planet LEFT, Card RIGHT (like about section) */}
        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-10 md:flex-row md:items-center">
          {/* Jupiter Planet - LEFT on desktop */}
          <motion.div
            className="relative flex h-60 w-60 shrink-0 items-center justify-center md:h-90 md:w-86 lg:h-104 lg:w-104"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Jupiter gradient placeholder - replace with image when available */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #d4a574 0%, #c4956a 20%, #e8c4a0 35%, #b8825a 50%, #d4a574 65%, #a07050 80%, #c4956a 100%)",
                  boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.3)",
                }}
              />
              {/* Jupiter bands */}
              <div
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent 0%, rgba(139,90,43,0.3) 8%, transparent 12%, rgba(210,160,110,0.2) 18%, transparent 22%)",
                }}
              />
              {/* Great Red Spot hint */}
              <div
                className="absolute rounded-full bg-red-700/40"
                style={{
                  width: "20%",
                  height: "12%",
                  top: "45%",
                  left: "25%",
                  filter: "blur(4px)",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_45%)]" />
            </div>

            {/* Track buttons on the planet */}
            <div className="relative z-10 h-full w-full">
              {tracks.map((track, index) => {
                const count = Math.max(tracks.length, 1);
                const radius = 100;
                const angle = -90 + (index * 360) / count;
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
                      <span className="absolute inset-0 -z-10 rounded-full bg-amber-300/60 blur-sm" />
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
              className="absolute left-1 top-1 -rotate-40 text-sm uppercase tracking-[0.25em] text-amber-100/80 md:left-2 md:top-2"
              animate={{ scale: isHovered ? 1.06 : 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              Jupiter
            </motion.span>
          </motion.div>

          {/* Track Info Card - RIGHT on desktop */}
          <div className="relative z-10 w-full max-w-lg -mt-6 rounded-xl border border-amber-400/60 bg-slate-900/70 p-6 text-white backdrop-blur md:static md:mt-0 md:translate-y-0">
            <h2 className="text-2xl font-bold text-amber-300">
              {activeTrack ? activeTrack.title : "Click a track to learn more"}
            </h2>
            <p className="mt-3 text-base text-amber-50/90">
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
