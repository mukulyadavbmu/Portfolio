"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin, FiDownload } from "react-icons/fi";
import { track } from "@/lib/analytics";

export default function HomeCTASection() {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6 text-center">
      <h2 className="cyber-section-heading text-4xl font-bold mb-8 font-mono">Get In Touch</h2>
      <p className="text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
        I'm currently looking for new opportunities in cybersecurity, cloud infrastructure, or backend development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a
          href="mailto:mukuly243@gmail.com"
          onClick={() => track({ name: "email_click", params: { context: "cta" } })}
          className="px-8 py-4 rounded bg-transparent border border-[var(--accent-green)] text-[var(--accent-green)] font-bold font-mono hover:bg-[var(--accent-green)] hover:text-[#121212] transition-colors flex items-center gap-2"
        >
          <FiMail size={20} /> Say Hello
        </a>
        <a
          href="/MUKUL_YADAV_BMU.pdf"
          download
          onClick={() => track({ name: "resume_download", params: { context: "cta" } })}
          className="px-8 py-4 rounded bg-[var(--accent-green)]/10 border border-[var(--accent-green)] text-[var(--accent-green)] font-bold font-mono hover:bg-[var(--accent-green)] hover:text-[#121212] transition-colors flex items-center gap-2"
        >
          <FiDownload size={20} /> Resume
        </a>
      </motion.div>
    </section>
  );
}
