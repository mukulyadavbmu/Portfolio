import { techStrip } from "@/data/skills";

export default function TechStripSection() {
  return (
    <div className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center sm:justify-start">
          {techStrip.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] tracking-wide uppercase"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--accent-blue)] opacity-50" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
