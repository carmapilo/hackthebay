import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export function HeroSection() {
  const { title, subtitle, cta, volunteerCta, volunteerCtaHref } =
    siteContent.hero;
  const sunSrc = siteContent.assets.sun;

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* SUN: Adjust size with w-[X] h-[X], position with top. Negative top = higher up */}
      <div
        className="absolute left-1/2 -top-136 h-440 w-440 sm:-top-88 sm:h-256 sm:w-5xl lg:-top-120 lg:h-360 lg:w-360"
        style={{
          transform: "translateX(-50%)",
          filter:
            "drop-shadow(0 0 48px rgba(255, 215, 0, 0.35)) drop-shadow(0 0 90px rgba(255, 165, 0, 0.25))",
        }}
        aria-hidden
      >
        <Image src={sunSrc} alt="" fill className="object-contain" priority />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl pt-16 text-center sm:pt-24">
        <p
          className="mb-4 inline-block rounded-full border border-white/20 bg-black/50 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] text-white backdrop-blur-sm"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          Tampa, Florida • Saturday April 11
        </p>

        <h1
          className="text-5xl font-black sm:text-6xl md:text-7xl"
          style={{
            color: "#1a1a1a",
            textShadow:
              "0 0 40px rgba(255,215,0,1), 0 0 80px rgba(255,200,50,0.9), 0 0 120px rgba(255,165,0,0.7), 0 4px 12px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px rgba(255,220,80,0.5)",
          }}
        >
          {title}
        </h1>

        <p
          className="mt-1 text-4xl font-black sm:text-5xl md:text-6xl"
          style={{
            color: "#1a1a1a",
            textShadow:
              "0 0 40px rgba(255,215,0,1), 0 0 80px rgba(255,200,50,0.9), 0 0 120px rgba(255,165,0,0.7), 0 4px 12px rgba(0,0,0,0.5)",
            WebkitTextStroke: "1px rgba(255,220,80,0.5)",
          }}
        >
          {subtitle}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 backdrop-blur-sm">
          12-Hour Hackathon • Spring 2026
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://events.mlh.io/events/13936-hack-the-bay-launch"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-8 py-3 text-lg font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-400/50"
          >
            {cta}
          </a>
          <a
            href={volunteerCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-300/70 bg-cyan-300/15 px-8 py-3 text-lg font-bold text-cyan-100 shadow-lg shadow-cyan-400/20 transition hover:scale-105 hover:border-cyan-200 hover:bg-cyan-300/25"
          >
            {volunteerCta}
          </a>
        </div>

        <p
          className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/90"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}
          aria-hidden
        >
          Explore the System ↓
        </p>
      </div>
    </section>
  );
}
