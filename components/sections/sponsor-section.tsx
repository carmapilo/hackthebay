"use client";

import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export function SponsorSection() {
  const { heading, sponsors } = siteContent.sponsors;

  return (
    <section
      id="sponsors"
      className="relative flex w-full items-center justify-center overflow-visible px-6 py-16"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-10 text-center md:text-left">
        <p className="w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {heading}
        </p>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col items-center">
              <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/40 bg-linear-to-br from-slate-950/90 via-cyan-950/60 to-slate-950/90 shadow-[0_0_50px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18)_0%,transparent_45%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12)_0%,transparent_35%),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:100%_100%,100%_100%,32px_32px,32px_32px]" />
                <div className="absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-amber-300/15 blur-3xl" />
                <div className="relative z-10 flex h-[72%] w-[72%] items-center justify-center rounded-xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                  {sponsor.logo && (
                    <div className="relative h-[82%] w-[82%]">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
              <span className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/90">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
