"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { FiArrowRight } from "react-icons/fi";

const items = [
  "Backend system design and scalable architecture patterns",
  "Web security fundamentals and vulnerability analysis",
  "Building full-stack applications end-to-end",
];

export default function ExploringSection() {
  return (
    <SectionWrapper id="exploring">
      <SectionHeader
        label="Currently Exploring"
        title="What I&apos;m focused on."
      />
      <div className="flex flex-col gap-3 max-w-lg">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <FiArrowRight
              size={14}
              className="text-[var(--accent-blue)] mt-0.5 flex-shrink-0"
            />
            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
