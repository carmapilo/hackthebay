"use client";

import Image from "next/image";
import { siteContent, type SponsorTier } from "@/content/siteContent";

const tierColors: Record<SponsorTier, string> = {
  platinum:
    "from-slate-200 via-slate-300 to-slate-500 shadow-[0_0_30px_8px_rgba(200,200,200,0.25)]",
  gold: "from-amber-200 via-amber-300 to-amber-500 shadow-[0_0_30px_8px_rgba(255,193,7,0.25)]",
  silver:
    "from-zinc-200 via-zinc-300 to-zinc-500 shadow-[0_0_30px_8px_rgba(160,160,160,0.25)]",
  bronze:
    "from-orange-200 via-orange-400 to-amber-600 shadow-[0_0_30px_8px_rgba(255,140,0,0.25)]",
};

export function SponsorSection() {
  const { heading, tiers } = siteContent.sponsors;

  return (
    <section
      id="sponsors"
      className="relative flex w-full items-center justify-center overflow-visible px-6 py-16"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-10 text-center md:text-left">
        <p className="w-full text-center text-4xl font-black uppercase tracking-[0.25em] text-cyan-200">
          {heading}
        </p>

        <div className="flex w-full flex-col gap-12">
          {tiers.map((tierBlock) => (
            <div
              key={tierBlock.tier}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-100/80">
                {tierBlock.tier}
              </span>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {tierBlock.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`relative flex h-30 w-30 items-center justify-center overflow-hidden rounded-full bg-linear-to-br ${
                      tierColors[sponsor.tier]
                    } px-3 md:h-36 md:w-36 md:px-4`}
                  >
                    {sponsor.logo && (
                      <div className="relative h-12 w-12 md:h-14 md:w-14">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="absolute bottom-2 left-1 right-1 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-black drop-shadow md:text-[10px]">
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
