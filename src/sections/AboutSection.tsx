"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-2xl">
        <SectionHeader label="About" title="Building with curiosity." />
        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I&apos;m a B.Tech engineering student at BML Munjal University,
            interested in how software systems are designed and built.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I learn by building — picking a problem, experimenting with
            relevant tools, and working through how different pieces connect.
            Each project has pushed me into a different part of the
            engineering landscape.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Currently exploring backend system design and security fundamentals
            while continuing to build full-stack projects.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
