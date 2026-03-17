"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiArrowDown } from "react-icons/fi";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Glowing orbs */}
      <div className="orb orb-blue absolute w-96 h-96 -top-20 -left-20" />
      <div className="orb orb-purple absolute w-80 h-80 -bottom-20 -right-20" />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-xs text-[var(--text-secondary)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to internship opportunities
        </motion.div> */}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-none"
        >
          Mukul <span className="gradient-text">Yadav</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto mb-3 leading-relaxed"
        >
          Engineering student building software systems and exploring different
          areas of technology through practical projects.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-[var(--text-muted)] max-w-md mx-auto mb-12"
        >
          Focused on learning by building and understanding how systems work in
          practice.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-blue)] text-white text-sm font-semibold hover:bg-blue-400 transition-colors duration-200 shadow-lg shadow-blue-500/20"
          >
            View Projects
          </Link>
          <a
            href="/MUKUL_YADAV_BMU.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
          >
            <FiDownload size={15} />
            Download Resume
          </a>
          <a
            href="https://github.com/mukulyadavbmu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
          >
            <FiGithub size={15} />
            GitHub
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
          >
            Contact
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-[var(--text-muted)]"
          >
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
