"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { siteContent, type Track } from "@/content/siteContent";

export function TracksSection() {
  const tracks = useMemo(() => siteContent.tracks.tracks, []);
  const jupiterSrc = siteContent.assets.jupiter;
  const jupiterMoons = siteContent.assets.jupiterMoons;
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track["id"]>("fintech");
  const activeTrack =
    tracks.find((track) => track.id === selectedTrack) ?? null;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsDesktopViewport(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

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
            className="relative flex h-80 w-80 shrink-0 items-center justify-center md:h-128 md:w-lg lg:h-128 lg:w-152"
            animate={{
              scale: isHovered ? 1.06 : 1,
            }}
            transition={{ duration: 0.25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-52 w-52 overflow-hidden rounded-full md:h-72 md:w-72">
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
                const radius = isDesktopViewport ? 220 : 150;
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
                    className={`absolute flex h-16 w-16 items-center justify-center rounded-full transition md:h-20 md:w-20 ${
                      isActive
                        ? "ring-3 ring-amber-300 ring-offset-2 ring-offset-black/80 shadow-[0_0_18px_4px_rgba(251,191,36,0.45)]"
                        : ""
                    }`}
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
                      <span className="absolute -inset-1 -z-10 rounded-full bg-amber-300/70 blur-md" />
                    )}
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={moonSrc}
                        alt={track.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    {/* Track name label */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <span className="text-[7px] leading-tight font-bold text-center uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] [text-shadow:0_1px_6px_rgba(0,0,0,0.95)] md:text-[8px]">
                        {track.title}
                      </span>
                    </div>
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
          <div className="relative z-10 w-full max-w-md">
            {/* Track selector dropdown */}
            <div className="relative mb-0">
              <select
                value={selectedTrack}
                onChange={(e) =>
                  setSelectedTrack(e.target.value as Track["id"])
                }
                className="w-full cursor-pointer appearance-none rounded-t-xl border border-amber-400/60 bg-slate-900/90 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-amber-300 backdrop-blur outline-none transition hover:border-amber-300"
              >
                {tracks.map((track) => (
                  <option
                    key={track.id}
                    value={track.id}
                    className="bg-slate-900 text-amber-300"
                  >
                    {track.title}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-amber-300">
                ▾
              </span>
            </div>
            <div className="rounded-b-xl border border-t-0 border-amber-400/60 bg-slate-900/70 p-6 text-white backdrop-blur">
              <p className="text-base text-amber-50/90">
                {activeTrack
                  ? activeTrack.description
                  : "Click on a track to learn more about it!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
