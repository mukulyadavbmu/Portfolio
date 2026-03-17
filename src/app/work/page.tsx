import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import AllProjectsContent from "./AllProjectsContent";

export const metadata: Metadata = {
  title: "Projects — Mukul Yadav",
  description:
    "Engineering projects by Mukul Yadav — exploring AI, full-stack development, machine learning, and web security.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <AllProjectsContent projects={projects} />
      <Footer />
    </main>
  );
}
