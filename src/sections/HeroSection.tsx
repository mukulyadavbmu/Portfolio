"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-[var(--accent-green)] px-4 py-2 rounded-md bg-black/50 text-[var(--accent-green)] text-sm mb-8"
        >
          // security_engineer / appsec
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-mono gradient-text"
        >
          MUKUL YADAV <small className="text-xl md:text-2xl text-[var(--text-muted)] font-normal inline-block ml-2">(mukulyadav)</small>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl"
        >
          Building defensive systems & automated security tooling
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-3xl bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg p-6 mb-12 text-left shadow-[0_0_30px_rgba(0,255,140,0.15)] mx-auto font-mono"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-red)]"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--accent-yellow)]"></div>
            <div className="w-3 h-3 rounded-full bg-[var(--accent-green)]"></div>
          </div>
          <div className="space-y-4 text-sm md:text-base">
            <div>
              <p><span className="text-[var(--accent-green)]">$</span> <span className="text-[var(--accent-red)]">whoami</span></p>
              <p className="text-gray-300 ml-4">&rarr; Security-focused Software Engineer</p>
            </div>
            <div>
              <p><span className="text-[var(--accent-green)]">$</span> <span className="text-[var(--accent-red)]">cat</span> specialization.txt</p>
              <p className="text-gray-300 ml-4"><span className="text-[var(--accent-cyan)]">&#x2B22;</span> Application Security</p>
              <p className="text-gray-300 ml-4"><span className="text-[var(--accent-cyan)]">&lt;/&gt;</span> Secure Backend Systems</p>
              <p className="text-gray-300 ml-4"><span className="text-[var(--accent-cyan)]">&#x2B22;</span> Cloud Security & DevSecOps</p>
            </div>
            <div>
              <p><span className="text-[var(--accent-green)]">$</span> <span className="text-[var(--accent-red)]">ls</span> -la achievements/</p>
              <p className="text-[var(--accent-yellow)] ml-4">&rarr; Hack KRMU 5.0 Winner (Feb 2026)</p>
            </div>
            <div>
              <p><span className="text-[var(--accent-green)]">$</span> <span className="animate-blink">_</span></p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="/work"
            className="px-8 py-4 rounded border border-[var(--accent-green)] text-[var(--accent-green)] font-bold hover:bg-[var(--accent-green)] hover:text-[#121212] transition-colors"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/mukulyadavbmu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold hover:bg-[var(--accent-cyan)] hover:text-[#121212] transition-colors flex items-center gap-2"
          >
            <FiGithub size={20} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/mukul-yadav-b0a714271"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold hover:bg-[var(--accent-cyan)] hover:text-[#121212] transition-colors flex items-center gap-2"
          >
            <FiLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="/MUKUL_YADAV_BMU.pdf"
            download
            className="px-8 py-4 rounded border border-[var(--text-secondary)] text-[var(--text-secondary)] font-bold hover:bg-[var(--text-secondary)] hover:text-[#121212] transition-colors flex items-center gap-2"
          >
            <FiDownload size={20} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
