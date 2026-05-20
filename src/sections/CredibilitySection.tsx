"use client";

import { motion } from "framer-motion";
import { certifications, achievements } from "@/data/credibility";
import { FiExternalLink, FiCheck, FiClock, FiCalendar } from "react-icons/fi";

export default function CredibilitySection() {
  return (
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-6 border-t border-[var(--border-subtle)]">
      <h2 className="cyber-section-heading text-4xl font-bold mb-16 font-mono">Verified Credentials</h2>

      <div className="grid lg:grid-cols-2 gap-16 font-mono">
        {/* ── Certifications ─────────────────────────── */}
        <div>
          <h3 className="text-xl font-bold text-[var(--accent-cyan)] mb-8 flex items-center gap-2">
            <span className="text-[var(--accent-green)]">&gt;</span> ./certifications.sh
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent-cyan)] hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-white text-lg group-hover:text-[var(--accent-cyan)] transition-colors">{cert.title}</h4>
                  <span
                    className={`text-[10px] px-2 py-1 rounded border uppercase tracking-widest ${
                      cert.status === "earned"
                        ? "text-[var(--accent-green)] border-[var(--accent-green)]/30 bg-[var(--accent-green)]/10"
                        : "text-[var(--accent-yellow)] border-[var(--accent-yellow)]/30 bg-[var(--accent-yellow)]/10"
                    }`}
                  >
                    {cert.status === "earned" ? "Earned" : "In Progress"}
                  </span>
                </div>
                
                <p className="text-xs text-gray-500 mb-4 border-l-2 border-[var(--accent-cyan)]/30 pl-3">
                  <span className="text-[var(--text-secondary)]">Issuer:</span> {cert.issuer} <br/>
                  <span className="text-[var(--text-secondary)]">Date:</span> {cert.date}
                </p>
                
                {cert.description && (
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}
                
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[var(--accent-cyan)] hover:text-white transition-colors"
                  >
                    <FiExternalLink size={14} /> Verify Credential
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Achievements ───────────────────────────── */}
        <div>
          <h3 className="text-xl font-bold text-[var(--accent-yellow)] mb-8 flex items-center gap-2">
            <span className="text-[var(--accent-green)]">&gt;</span> ./achievements.sh
          </h3>
          <div className="space-y-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent-yellow)] hover:shadow-[0_0_15px_rgba(255,215,0,0.15)] transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-white text-lg group-hover:text-[var(--accent-yellow)] transition-colors pr-4">{item.title}</h4>
                  <span className="shrink-0 text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar size={12} /> {item.date}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {item.context}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 bg-[#121212] text-gray-400 border border-[var(--border-subtle)] rounded uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.proof && (
                    <a
                      href={item.proof}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[var(--accent-yellow)] hover:text-white transition-colors shrink-0"
                    >
                      <FiExternalLink size={14} /> View Proof
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
