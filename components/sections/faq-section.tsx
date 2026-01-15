"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";

export function FAQSection() {
  const faqs = siteContent.faq.items;
  const {
    neptune: neptuneSrc,
    uranus: uranusSrc,
    neptuneMoons,
  } = siteContent.assets;
  const [selectedFAQ, setSelectedFAQ] = useState(0);

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
            <div className="relative h-60 w-60 p-3">
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
                const radius = 130;
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
                    className="absolute flex h-18 w-18 items-center justify-center overflow-hidden rounded-full transition"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "center",
                    }}
                    initial={{ x, y }}
                    animate={{ x, y, scale: isActive ? 1.4 : 1 }}
                    whileHover={{ scale: 1.2, x, y }}
                    aria-label={faq.question}
                  >
                    {isActive && (
                      <span className="absolute inset-[-4px] -z-10 rounded-full bg-cyan-400/70 blur-md" />
                    )}
                    <Image
                      src={moonSrc}
                      alt={`FAQ ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {/* FAQ question text overlay */}
                    <div className="relative z-10 flex h-full w-full items-center justify-center p-2">
                      <p className="text-[9px] font-bold text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {faq.question}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Uranus answer */}
          <div className="flex flex-col items-center gap-3 text-center">
            <motion.div
              key={selectedFAQ}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-96 w-160 p-8 text-center"
            >
              {/* Uranus image - full image with rings visible */}
              <Image
                src={uranusSrc}
                alt="Uranus"
                fill
                className="object-contain"
              />
              {/* Answer overlay with misty background */}
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 px-30 text-center text-white">
                <div className=" rounded-2xl border border-cyan-400/40 bg-linear-to-br from-cyan-900/60 via-blue-900/50 to-slate-900/60 p-6 backdrop-blur-[4px] shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100 mb-3">
                    Answer
                  </p>
                  <p className="text-sm text-cyan-50 leading-relaxed">
                    {faqs[selectedFAQ].answer}
                  </p>
                </div>
              </div>
              <span className="absolute left-4 top-4 -rotate-45 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90 drop-shadow-lg">
                {siteContent.faq.uranus}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
