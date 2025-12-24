import { CTASection } from "@/components/sections/cta-section";
import { EarthSection } from "@/components/sections/earth-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MarsSection } from "@/components/sections/mars-section";
import { AboutSection } from "@/components/sections/about-section";
import { Starfield } from "@/components/starfield";
import { SponsorSection } from "@/components/sections/sponsor-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
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
        <EarthSection />
        <MarsSection />
        <FAQSection />
        <SponsorSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
