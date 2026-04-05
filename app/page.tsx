import { CTASection } from "@/components/sections/cta-section";
import { LocationSection } from "@/components/sections/location-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { TracksSection } from "@/components/sections/tracks-section";
import { AboutSection } from "@/components/sections/about-section";
import { Starfield } from "@/components/starfield";
import { SponsorSection } from "@/components/sections/sponsor-section";
import { PrizesSection } from "@/components/sections/prizes-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScheduleSection } from "@/components/sections/schedule-section";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  const { asteroidCluster1, asteroidCluster2 } = siteContent.assets;

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <Starfield />
      <main
        className="relative z-10 flex min-h-screen w-full flex-col"
        id="hero"
      >
        <HeroSection />
        <AboutSection />
        <div className="relative">
          <LocationSection />
          <div className="pointer-events-none absolute -bottom-24 left-[10%] h-24 w-24 rotate-6 sm:h-36 sm:w-36 md:h-44 md:w-44">
            <Image
              src={asteroidCluster1}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <SpeakersSection />
        <div className="relative">
          <TracksSection />
          <div className="pointer-events-none absolute right-[5%] bottom-[5%] h-28 w-28 -rotate-8 sm:h-40 sm:w-40 md:h-52 md:w-52">
            <Image
              src={asteroidCluster2}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <ScheduleSection />
        <FAQSection />

        <SponsorSection />
        <PrizesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
