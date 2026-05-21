"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { type Project } from "@/data/projects";
import { FiGithub } from "react-icons/fi";

interface AllProjectsContentProps {
  projects: Project[];
}

export default function AllProjectsContent({ projects }: AllProjectsContentProps) {
  const featured = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-[var(--accent-green)] mb-3">
            &gt; ls -la projects/
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security & Engineering Work
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl leading-relaxed">
            All projects are publicly available on GitHub. Featured projects have full case studies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="font-mono text-xs tracking-widest uppercase text-[var(--accent-cyan)] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            Featured Projects — Deep Dives Available
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional GitHub Projects */}
        {additional.length > 0 && (
          <div>
            <h2 className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--border)]" />
              Additional GitHub Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {additional.map((project, i) => (
                <motion.a
                  key={project.id}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group block p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-blue)]/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <FiGithub size={18} className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors" />
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
                      {project.tags[0] || "Project"}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-surface)] text-gray-400 border border-[var(--border-subtle)] font-mono uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-10 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-sm text-[var(--text-muted)] font-mono">
            All source code is publicly available on GitHub.
          </p>
          <a
            href="https://github.com/mukulyadavbmu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
          >
            <FiGithub size={15} />
            View GitHub Profile →
          </a>
        </motion.div>

      </div>
    </div>
  );
}
