"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function GitHubSection() {
    return (
        <SectionWrapper id="github">
            <SectionHeader
                label="GitHub"
                title="Open source work."
                subtitle="A selection of repositories demonstrating different engineering interests. Code is the most honest representation of what I can build."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="group block p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-blue)]/40 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <FiGithub
                                size={18}
                                className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors duration-200"
                            />
                            <FiExternalLink
                                size={13}
                                className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            />
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[var(--accent-blue)] transition-colors duration-200">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {project.tags.slice(0, 2).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] px-1.5 py-0.5 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* GitHub Profile CTA */}
            <div className="text-center">
                <motion.a
                    href="https://github.com/mukulyadavbmu"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
                >
                    <FiGithub size={18} />
                    View GitHub Profile
                </motion.a>
            </div>
        </SectionWrapper>
    );
}
