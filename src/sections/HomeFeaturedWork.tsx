"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

// Show only the 2 primary + 1 optional on home
const featuredIds = ["sandhawk", "vulnforge", "eduvora"];
const featuredProjects = projects.filter((p) => featuredIds.includes(p.id));

export default function HomeFeaturedWork() {
  return (
    <section id="work" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="cyber-section-heading text-4xl font-bold mb-12 font-mono">Featured Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="h-full"
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <Link
          href="/work"
          className="px-8 py-3 rounded border border-[var(--border)] text-[var(--text-secondary)] font-mono hover:text-[var(--accent-green)] hover:border-[var(--accent-green)] hover:bg-[var(--accent-green)]/10 transition-all shadow-[0_0_15px_rgba(0,255,140,0)] hover:shadow-[0_0_15px_rgba(0,255,140,0.2)]"
        >
          &gt; View All Projects _
        </Link>
      </motion.div>
    </section>
  );
}
