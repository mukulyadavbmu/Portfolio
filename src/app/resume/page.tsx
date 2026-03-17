import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ResumePageContent from "./ResumePageContent";

export const metadata: Metadata = {
  title: "Resume — Mukul Yadav",
  description: "Resume of Mukul Yadav — B.Tech engineering student.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <ResumePageContent />
      <Footer />
    </main>
  );
}
