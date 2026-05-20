// ArchitectureSection is not used on the homepage and has a broken
// `subtitle` prop that doesn't exist on SectionHeader.
// This file is preserved but the section itself is excluded from
// the homepage page.tsx until it is needed.
"use client";

import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";

export default function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture">
      <SectionHeader
        label="System Architecture"
        title="Understanding how systems connect."
      />
      {/* ArchitectureFlow visualisation — add implementation here */}
    </SectionWrapper>
  );
}
