"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/siteContent";

export function FAQSection() {
  const faqs = siteContent.faq.items;
  const {
    neptune: neptuneSrc,
    uranus: uranusSrc,
    neptuneMoons,
  } = siteContent.assets;
  const [selectedFAQ, setSelectedFAQ] = useState(0);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktopViewport(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Map FAQs to Neptune moons
  const faqMoons = [neptuneMoons.moon1, neptuneMoons.moon2, neptuneMoons.moon3];

  return (
    <section
      id="faq"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative w-full max-w-6xl text-white">
        <p className="mb-12 text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {siteContent.faq.heading}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Neptune cluster */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="relative h-44 w-44 p-2 md:h-56 md:w-56 md:p-3">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src={neptuneSrc}
                  alt="Neptune"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute left-0 top-0 -rotate-45 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90">
                {siteContent.faq.neptune}
              </span>
              {faqs.map((faq, index) => {
                const count = Math.max(faqs.length, 1);
                const radius = isDesktopViewport ? 170 : 108;
                // First moon at 9 o'clock (180°), evenly spaced around 360°
                const angle = 180 + (index * 360) / count;
                const x = Math.cos((angle * Math.PI) / 180) * radius - 28;
                const y = Math.sin((angle * Math.PI) / 180) * radius - 28;

                const isActive = selectedFAQ === index;
                const moonSrc = faqMoons[index];

                return (
                  <motion.button
                    key={faq.question}
                    onClick={() => setSelectedFAQ(index)}
                    className={`absolute flex h-14 w-14 items-center justify-center rounded-full transition lg:h-26 lg:w-26 ${
                      isActive
                        ? "ring-4 ring-cyan-400 ring-offset-2 ring-offset-black/80 shadow-[0_0_22px_5px_rgba(34,211,238,0.5)]"
                        : ""
                    }`}
                    style={{
                      left: "48%",
                      top: "48%",
                      transformOrigin: "center",
                    }}
                    initial={{ x, y }}
                    animate={{ x, y, scale: isActive ? 1.4 : 1 }}
                    whileHover={{ scale: 1.2, x, y }}
                    aria-label={faq.question}
                  >
                    {isActive && (
                      <span className="absolute -inset-1.5 -z-10 rounded-full bg-cyan-400/60 blur-md" />
                    )}
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={moonSrc}
                        alt={`FAQ ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* FAQ question text overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-3">
                      <p className="text-[7px] leading-tight font-bold text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] lg:text-[10px]">
                        {faq.question === "How long is the hackathon?" ? (
                          <>
                            {"How long"}
                            <br />
                            {"is the"}
                            <br />
                            {"hackathon?"}
                          </>
                        ) : (
                          faq.question
                        )}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Uranus answer */}
          <div className="flex w-full max-w-md flex-col items-center gap-2 text-center">
            <motion.div
              key={selectedFAQ}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full overflow-hidden rounded-2xl border border-cyan-400/50 bg-linear-to-br from-slate-950/92 via-cyan-950/65 to-slate-950/92 p-5 text-center shadow-[0_0_50px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18)_0%,transparent_45%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12)_0%,transparent_35%),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-size-[100%_100%,100%_100%,32px_32px,32px_32px]" />
              <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 px-3 text-center">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] [text-shadow:0_0_8px_rgba(0,0,0,0.9)] md:text-lg md:tracking-[0.2em]">
                  Answer
                </p>
                <p className="text-[14px] leading-relaxed font-bold text-cyan-50 drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] [text-shadow:0_0_10px_rgba(0,0,0,0.95)] md:text-base">
                  {faqs[selectedFAQ].answer}
                </p>
              </div>
            </motion.div>

            <div className="relative h-56 w-full max-w-80 md:h-72 md:max-w-96">
              <Image
                src={uranusSrc}
                alt="Uranus"
                fill
                className="object-contain"
              />
              <span className="absolute bottom-3 right-3 rotate-12 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90 drop-shadow-lg">
                {siteContent.faq.uranus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
