"use client";

import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <SectionWrapper
            id="work"
            className="bg-[var(--bg-surface)]/30"
        >
            <SectionHeader
                label="Selected Work"
                title="Projects that explore real problems."
                subtitle="Each project represents an attempt to understand a domain by building something within it. Focused on learning through implementation, not production claims."
            />

            <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </SectionWrapper>
    );
}
