"use client";

import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Show only the 2 primary + 1 optional on home
const featuredIds = ["vulnforge", "aether", "plant-disease"];
const featuredProjects = projects.filter((p) => featuredIds.includes(p.id));

export default function HomeFeaturedWork() {
  return (
    <SectionWrapper id="work" className="bg-[var(--bg-surface)]/30">
      <SectionHeader
        label="Selected Work"
        title="A few things I've built."
        subtitle="Projects that helped me understand different areas of engineering through practical implementation."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-white group transition-colors duration-200"
        >
          View a few more projects
          <FiArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
