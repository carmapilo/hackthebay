"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";

export function FAQSection() {
  const faqs = siteContent.faq.items;
  const [selectedFAQ, setSelectedFAQ] = useState(0);

  return (
    <section
      id="faq"
      className="relative flex min-h-screen w-full items-center justify-center overflow-visible px-6 py-12"
    >
      <div className="relative w-full max-w-6xl text-white">
        <p className="mb-12 text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {siteContent.faq.heading}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:gap-60">
          {/* Neptune cluster */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="relative h-72 w-72 p-3">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-400 via-blue-600 to-blue-800" />
              <span className="absolute left-1 top-1 -rotate-45 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90">
                {siteContent.faq.neptune}
              </span>
              {faqs.map((faq, index) => {
                const count = Math.max(faqs.length, 1);
                const radius = 140;
                // First moon at 9 o'clock (180°), evenly spaced around 360°
                const angle = 180 + (index * 360) / count;
                const x = Math.cos((angle * Math.PI) / 180) * radius - 40;
                const y = Math.sin((angle * Math.PI) / 180) * radius - 40;

                const isActive = selectedFAQ === index;

                return (
                  <motion.button
                    key={faq.question}
                    onClick={() => setSelectedFAQ(index)}
                    className={`absolute flex h-20 w-20 items-center justify-center rounded-full p-12 text-center text-[11px] font-bold transition ${
                      isActive
                        ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/40"
                        : "bg-gray-300 text-black"
                    }`}
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "center",
                    }}
                    initial={{ x, y }}
                    animate={{ x, y }}
                    whileHover={{ scale: 1.08, x, y }}
                    aria-label={faq.question}
                  >
                    {faq.question}
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
              className="relative h-80 w-80 rounded-full border border-cyan-400/60 bg-linear-to-br from-green-400 via-cyan-500 to-blue-600 p-8 text-center"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_45%)]" />
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                  Answer
                </p>
                {/* <h3 className="text-lg font-bold text-cyan-50">
                  {faqs[selectedFAQ].question}
                </h3> */}
                <p className="text-sm text-cyan-50/90">
                  {faqs[selectedFAQ].answer}
                </p>
              </div>
              <span className="absolute left-1 top-1 -rotate-45 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90">
                {siteContent.faq.uranus}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
