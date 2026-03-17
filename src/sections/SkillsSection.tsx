"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";

const primarySkills = [
  "Java",
  "JavaScript",
  "C++",
  "React",
  "Node.js",
  "Git",
  "Linux",
];

const secondarySkills = [
  "TypeScript",
  "NestJS",
  "Firebase",
  "Supabase",
  "Playwright",
  "Python",
  "ML tools",
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader label="Skills" title="What I work with." />

      <div className="space-y-8">
        {/* Primary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            Core
          </h3>
          <div className="flex flex-wrap gap-2">
            {primarySkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-[var(--bg-card)] text-white border border-[var(--border)] hover:border-[var(--accent-blue)]/50 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
            Also used in projects
          </h3>
          <div className="flex flex-wrap gap-2">
            {secondarySkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)] hover:text-[var(--text-secondary)] transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
