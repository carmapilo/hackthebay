"use client";

import { siteContent } from "@/content/siteContent";

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-visible px-6 pb-4"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-10 text-center">
        <p className="text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {about.title}
        </p>

        <div className="relative flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-between">
          {/* Mercury - top */}
          <div className="relative flex flex-col items-center gap-2 md:-translate-y-4">
            <div className="relative h-24 w-24 shrink-0 rounded-full bg-linear-to-br from-slate-300 via-gray-400 to-slate-500 shadow-[0_0_30px_8px_rgba(200,200,200,0.15)]">
              <span className="absolute left-[-20px] top-[-20px] -rotate-30 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90">
                Mercury
              </span>
            </div>
          </div>

          {/* Hologram card */}
          <div className="relative w-full max-w-xl">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/60 bg-slate-900/70 p-8 text-white backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,215,0,0.08),transparent_30%)]" />
              <div className="relative space-y-4">
                <p className="text-base text-cyan-50/90">{about.body}</p>
              </div>
            </div>
          </div>

          {/* Venus - bottom */}
          <div className="relative flex flex-col items-center gap-2 md:translate-y-4">
            <div className="relative h-24 w-24 shrink-0 rounded-full bg-linear-to-br from-amber-300 via-orange-500 to-pink-500 shadow-[0_0_40px_10px_rgba(255,165,0,0.18)]">
              <span className="absolute left-[-20px] top-[-20px] -rotate-30 text-[10px] uppercase tracking-[0.25em] text-cyan-100/90">
                Venus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
