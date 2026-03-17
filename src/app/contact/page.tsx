import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Mukul Yadav",
  description: "Get in touch with Mukul Yadav.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
