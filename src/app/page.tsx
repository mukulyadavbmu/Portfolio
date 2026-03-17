import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import TechStripSection from "@/sections/TechStripSection";
import AboutSection from "@/sections/AboutSection";
import EngineeringApproachSection from "@/sections/EngineeringApproachSection";
import SkillsSection from "@/sections/SkillsSection";
import HomeFeaturedWork from "@/sections/HomeFeaturedWork";
import ExploringSection from "@/sections/ExploringSection";
import HomeCTASection from "@/sections/HomeCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <HeroSection />
      <TechStripSection />
      <AboutSection />
      <EngineeringApproachSection />
      <SkillsSection />
      <HomeFeaturedWork />
      <ExploringSection />
      <HomeCTASection />
      <Footer />
    </main>
  );
}
