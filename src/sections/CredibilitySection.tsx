"use client";

import { motion } from "framer-motion";
import { certifications, achievements } from "@/data/credibility";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { getAssetPath } from "@/lib/paths";

export default function CredibilitySection() {
  return (
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-6 border-t border-[var(--border-subtle)]">
      <h2 className="cyber-section-heading text-4xl font-bold mb-16 font-mono">Verified Credentials</h2>

      <div className="grid lg:grid-cols-2 gap-16 font-mono">
        {/* ── Certifications ─────────────────────────── */}
        <div>
          <h3 className="text-xl font-bold text-[var(--accent-cyan)] mb-8 flex items-center gap-2">
            <span className="text-[var(--accent-green)]">&gt;</span> certifications/
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent-cyan)] hover:shadow-[0_0_12px_rgba(0,217,255,0.12)] transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white text-sm group-hover:text-[var(--accent-cyan)] transition-colors leading-tight pr-4">
                    {cert.title}
                  </h4>
                  <span className="shrink-0 text-[10px] px-2 py-1 rounded border text-[var(--accent-green)] border-[var(--accent-green)]/30 bg-[var(--accent-green)]/10 uppercase tracking-widest">
                    Earned
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-3">
                  <span className="text-[var(--text-secondary)]">{cert.issuer}</span>
                  <span className="mx-2 text-gray-700">·</span>
                  <span>{cert.date}</span>
                </p>

                {cert.description && (
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}

                {cert.certificateFile && (
                  <a
                    href={getAssetPath(cert.certificateFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-cyan)] hover:text-white transition-colors"
                  >
                    <FiExternalLink size={12} /> View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Achievements ───────────────────────────── */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 border-b border-[var(--border)] pb-2 inline-block">
            Milestones & Achievements
          </h3>

          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--text-secondary)] transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <FiAward size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg leading-tight mb-1">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-mono">
                    {item.date}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {item.context}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 bg-[var(--bg-primary)] text-gray-400 border border-[var(--border-subtle)] rounded uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
