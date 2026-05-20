// Client component that fires project_view analytics on mount.
// Kept separate so the Server Component page.tsx stays a pure RSC.
"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

interface CaseStudyTrackerProps {
  slug: string;
}

export default function CaseStudyTracker({ slug }: CaseStudyTrackerProps) {
  useEffect(() => {
    track({ name: "project_view", params: { project: slug } });
  }, [slug]);

  return null; // renders nothing
}
