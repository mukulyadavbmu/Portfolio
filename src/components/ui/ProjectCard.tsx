import { type Project } from "@/data/projects";
import { FiGithub, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,140,0.2)] hover:border-[var(--accent-green)] transition-all duration-300 ease-out">
      {/* Decorative top border gradient on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Project Image */}
      <div className="w-full h-48 bg-[#1a1a1a] relative overflow-hidden border-b border-[var(--border)]">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-[var(--accent-green)] text-opacity-50 text-4xl font-bold">
            {project.title.substring(0, 2).toUpperCase()}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Eyebrow */}
        <span className="font-mono text-[10px] tracking-widest text-[var(--accent-cyan)] uppercase mb-3 block">
          {project.highlight}
        </span>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-green)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Footer (Tech & Links) */}
        <div className="mt-auto flex flex-col gap-5 pt-5 border-t border-[var(--border-subtle)]">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-1 rounded border border-[var(--border)] bg-[#121212] text-gray-300 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[var(--accent-cyan)] transition-colors duration-200"
            >
              <FiGithub size={14} />
              GitHub
            </a>
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-green)] hover:text-green-400 transition-colors duration-200"
            >
              Case Study
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
