"use client";

import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";

export default function ArchitectureSection() {
    return (
        <SectionWrapper id="architecture">
            <SectionHeader
                label="System Architecture"
                title="Understanding how systems connect."
                subtitle="Modern software systems involve multiple layers working together. Here's the conceptual flow I work to understand through building projects."
            />
            <ArchitectureFlow />
        </SectionWrapper>
    );
}
