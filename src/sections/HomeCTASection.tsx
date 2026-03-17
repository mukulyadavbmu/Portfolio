"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiFileText } from "react-icons/fi";

export default function HomeCTASection() {
  return (
    <section className="py-20 md:py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Let&apos;s connect.
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-sm">
              Open to internship opportunities and engineering conversations.
            </p>
          </motion.div>

          {/* Right - links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="mailto:mukuly243@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-blue)] text-white text-sm font-semibold hover:bg-blue-400 transition-colors duration-200"
            >
              <FiMail size={14} />
              Email me
            </a>
            <a
              href="https://github.com/mukulyadavbmu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
            >
              <FiGithub size={14} />
              GitHub
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] text-sm font-semibold border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
            >
              <FiFileText size={14} />
              Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
