"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { type Project } from "@/data/projects";

interface AllProjectsContentProps {
  projects: Project[];
}

export default function AllProjectsContent({
  projects,
}: AllProjectsContentProps) {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--accent-blue)] mb-3">
            Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security & Engineering Work.
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl leading-relaxed">
            A comprehensive look at my work in application security, automated testing, and backend architecture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 pt-10 border-t border-[var(--border-subtle)]"
        >
          <p className="text-sm text-[var(--text-muted)] mb-4">
            All source code is publicly available on GitHub.
          </p>
          <a
            href="https://github.com/mukulyadavbmu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
