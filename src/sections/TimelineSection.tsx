"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/credibility";

const typeColors: Record<string, string> = {
  project: "border-[var(--accent-cyan)] text-[var(--accent-cyan)]",
  milestone: "border-[var(--accent-green)] text-[var(--accent-green)]",
  cert: "border-[var(--accent-yellow)] text-[var(--accent-yellow)]",
  education: "border-[var(--accent-red)] text-[var(--accent-red)]",
};

const typeLabels: Record<string, string> = {
  project: "Project",
  milestone: "Milestone",
  cert: "Certification",
  education: "Education",
};

export default function TimelineSection() {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="cyber-section-heading text-4xl font-bold mb-16 font-mono">Experience & Timeline</h2>

      <div className="relative font-mono">
        {/* Vertical connector line */}
        <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gray-800" aria-hidden="true" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={`${item.period}-${item.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-12"
            >
              {/* Dot */}
              <div className="absolute left-[3px] top-1.5 w-[18px] h-[18px] rounded-full border-2 border-[var(--bg-primary)] bg-[var(--accent-green)] shadow-[0_0_10px_rgba(0,255,140,0.5)] z-10" />

              {/* Content */}
              <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg p-6 shadow-[0_0_20px_rgba(0,255,140,0.05)] hover:border-[var(--accent-green)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 border-b border-[var(--border-subtle)] pb-4">
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-[var(--accent-green)] transition-colors">{item.title}</h3>
                    <span
                      className={`text-[10px] uppercase tracking-widest mt-1 block ${
                        typeColors[item.type] ?? "text-gray-400"
                      }`}
                    >
                      [{typeLabels[item.type]}]
                    </span>
                  </div>
                  <span className="text-xs text-[var(--accent-cyan)] shrink-0 px-3 py-1 bg-[#121212] border border-[var(--border-subtle)] rounded">{item.period}</span>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 bg-black/50 text-gray-400 border border-[var(--border-subtle)] rounded uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
