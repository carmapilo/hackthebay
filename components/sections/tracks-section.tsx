"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { siteContent, type Track } from "@/content/siteContent";

export function TracksSection() {
  const tracks = useMemo(() => siteContent.tracks.tracks, []);
  const jupiterSrc = siteContent.assets.jupiter;
  const jupiterMoons = siteContent.assets.jupiterMoons;
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track["id"]>("fintech");
  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) ?? null;

  // Map tracks to Jupiter moons
  const trackMoons: Record<Track["id"], string> = {
    fintech: jupiterMoons.io,
    cybersecurity: jupiterMoons.europa,
    automation: jupiterMoons.ganymede,
    health: jupiterMoons.callisto,
    sustainability: jupiterMoons.moon5,
  };

  return (
    <section
      id="tracks"
      className="relative flex w-full items-center justify-center overflow-visible px-6 py-16 md:py-24"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-amber-200">
          {siteContent.tracks.heading}
        </p>

        {/* Layout: Planet LEFT, Card RIGHT (like about section) */}
        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-10 md:flex-row md:items-center">
          {/* Jupiter Planet - LEFT on desktop */}
          <motion.div
            className="relative flex h-[26rem] w-[26rem] shrink-0 items-center justify-center md:h-[32rem] md:w-[32rem] lg:h-[32rem] lg:w-[38rem]"
            animate={{
              scale: isHovered ? 1 : 1,
            }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-60 w-60 overflow-hidden rounded-full md:h-72 md:w-72">
                <Image
                  src={jupiterSrc}
                  alt="Jupiter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Track moon buttons orbiting the planet */}
            <div className="relative z-10 h-full w-full">
              {tracks.map((track, index) => {
                const count = Math.max(tracks.length, 1);
                const radius = 220;
                const angle = -90 + (index * 360) / count;
                const x = Math.cos((angle * Math.PI) / 180) * radius - 25;
                const y = Math.sin((angle * Math.PI) / 180) * radius - 25;

                const isActive = selectedTrack === track.id;
                const moonSrc = trackMoons[track.id];

                return (
                  <motion.button
                    key={track.id}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedTrack(track.id);
                    }}
                    className="absolute flex h-20 w-20 items-center justify-center overflow-hidden rounded-full transition"
                    style={{
                      left: "48%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ x, y }}
                    animate={{ x, y, scale: isActive ? 1.4 : 1 }}
                    whileHover={{ scale: 1.3, x, y }}
                    whileTap={{ scale: 0.98, x, y }}
                    aria-label={track.title}
                  >
                    {isActive && (
                      <span className="absolute inset-[-4px] -z-10 rounded-full bg-amber-300/70 blur-md" />
                    )}
                    <Image
                      src={moonSrc}
                      alt={track.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
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
          <div className="relative z-10 w-full max-w-md rounded-xl border border-amber-400/60 bg-slate-900/70 p-6 text-white backdrop-blur">
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
