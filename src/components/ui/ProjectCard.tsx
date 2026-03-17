"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 card-glow transition-all duration-300 hover:border-[var(--accent-blue)]/30"
        >
            {/* Subtle gradient shimmer on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/0 to-[var(--accent-purple)]/0 group-hover:from-[var(--accent-blue)]/5 group-hover:to-[var(--accent-purple)]/5 transition-all duration-500 pointer-events-none" />

            {/* Project Title */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--accent-blue)] transition-colors duration-200">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {project.description}
            </p>

            {/* Technical Highlight */}
            <div className="mb-5 p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--accent-blue)] mb-1.5">
                    Technical Highlight
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {project.highlight}
                </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* GitHub Link */}
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors duration-200 group/link"
            >
                <FiGithub size={15} />
                <span className="group-hover/link:underline underline-offset-4">
                    View on GitHub
                </span>
                <FiExternalLink size={12} className="opacity-50" />
            </a>
        </motion.div>
    );
}
