"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/credibility";
import { SkillBubbles } from "@/components/SkillBubbles";

export default function SkillsCategorySection() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="cyber-section-heading text-4xl font-bold mb-12 font-mono">Skills Sandbox</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl" role="img" aria-label={category.title}>
                {category.icon}
              </span>
              <h3 className="font-mono text-lg font-bold text-white tracking-widest uppercase">
                {category.title}
              </h3>
            </div>
            
            <SkillBubbles skills={category.skills} categoryIndex={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
