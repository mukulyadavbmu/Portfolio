import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import HomeFeaturedWork from "@/sections/HomeFeaturedWork";
import SkillsCategorySection from "@/sections/SkillsCategorySection";
import CredibilitySection from "@/sections/CredibilitySection";
import TimelineSection from "@/sections/TimelineSection";
import AboutSection from "@/sections/AboutSection";
import HomeCTASection from "@/sections/HomeCTASection";
import { BootScreen } from "@/components/BootScreen";

export const metadata: Metadata = {
  title: "Mukul Yadav — Security Engineer",
  description:
    "Security engineering portfolio. Building automated security tooling, secure backends, and defensive systems across modern web architectures.",
  keywords: [
    "security engineer",
    "appsec",
    "DAST",
    "portfolio",
    "Mukul Yadav",
    "BML Munjal",
    "cybersecurity",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <BootScreen />
      <Navbar />
      <HeroSection />
      <HomeFeaturedWork />
      <AboutSection />
      <SkillsCategorySection />
      <CredibilitySection />
      <TimelineSection />
      <HomeCTASection />
      <Footer />
    </main>
  );
}
