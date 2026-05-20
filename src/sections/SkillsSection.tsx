"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader label="Technical Stack" title="Core Competencies." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-mono tracking-widest text-[var(--accent-blue)] mb-5 uppercase border-b border-[var(--border-subtle)] pb-2">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <span className="text-[var(--accent-blue)] font-mono text-xs mt-0.5">&gt;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
