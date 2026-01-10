"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { siteContent, type Speaker } from "@/content/siteContent";

export function SpeakersSection() {
  const speakers = useMemo(() => siteContent.speakers.speakers, []);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>(
    speakers[0]?.id ?? ""
  );
  const activeSpeaker =
    speakers.find((speaker) => speaker.id === selectedSpeaker) ?? null;

  return (
    <section
      id="speakers"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:text-left">
        <p className="relative z-20 w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-orange-200">
          {siteContent.speakers.heading}
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-10 md:flex-row md:items-center">
          {/* Mars Planet with Speakers */}
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

            {/* Speaker buttons on the planet */}
            <div className="relative z-10 h-full w-full">
              {speakers.map((speaker, index) => {
                const count = Math.max(speakers.length, 1);
                const radius = 100;
                const angle = -90 + (index * 360) / count;
                const x = Math.cos((angle * Math.PI) / 180) * radius - 20;
                const y = Math.sin((angle * Math.PI) / 180) * radius - 20;

                const isActive = selectedSpeaker === speaker.id;

                return (
                  <motion.button
                    key={speaker.id}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedSpeaker(speaker.id);
                    }}
                    className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-slate-800 shadow-lg transition hover:bg-white"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ x, y }}
                    animate={{
                      x,
                      y,
                      scale: isActive ? 1.4 : 1,
                      backgroundColor: isActive
                        ? "rgb(251, 191, 36)"
                        : "rgba(255, 255, 255, 0.9)",
                    }}
                    whileHover={{ scale: 1.3, x, y }}
                    whileTap={{ scale: 0.98, x, y }}
                    aria-label={speaker.name}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-yellow-300/60 blur-sm" />
                    )}
                    {speaker.image ? (
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-[10px] font-bold">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
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

          {/* Speaker Info Card */}
          <div className="relative z-10 order-2 w-full max-w-lg -mt-6 rounded-xl border border-orange-400/60 bg-slate-900/70 p-6 text-white backdrop-blur md:order-1 md:static md:mt-0 md:translate-y-0">
            <h2 className="text-2xl font-bold text-orange-300">
              {activeSpeaker
                ? activeSpeaker.name
                : "Click a speaker to learn more"}
            </h2>
            {activeSpeaker && (
              <>
                <p className="mt-1 text-sm text-orange-200/80">
                  {activeSpeaker.role} at {activeSpeaker.company}
                </p>
                <p className="mt-4 text-base text-orange-50/90">
                  {activeSpeaker.bio}
                </p>
              </>
            )}
            {!activeSpeaker && (
              <p className="mt-3 text-base text-orange-50/90">
                Click on a speaker icon to learn more about them!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
