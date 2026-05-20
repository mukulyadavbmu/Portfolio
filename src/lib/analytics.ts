// ============================================================
// src/lib/analytics.ts
// Lightweight, privacy-safe analytics wrapper.
// Uses Google Analytics 4 (gtag) with no PII collected.
// GA_MEASUREMENT_ID is read from NEXT_PUBLIC_GA_ID env var.
// If the env var is absent the tracker is a no-op so the site
// still works perfectly in dev / without GA configured.
// ============================================================

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// ── Types ───────────────────────────────────────────────────

export type TrackEvent =
  | { name: "resume_download"; params?: { method?: "download" | "view" } }
  | { name: "resume_view"; params?: { method?: string } }
  | { name: "github_click"; params?: { context?: string } }
  | { name: "linkedin_click"; params?: { context?: string } }
  | { name: "project_view"; params?: { project: string } }
  | { name: "email_click"; params?: { context?: string } }
  | { name: "cta_click"; params?: { label?: string } };

// ── Core tracker ─────────────────────────────────────────────

/**
 * track() — fire a GA4 event.
 * Safe to call server-side (no-op) and when GA isn't loaded.
 */
export function track(event: TrackEvent): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event.name, {
    ...(event.params ?? {}),
    // Ensure no PII is accidentally sent
    send_to: process.env.NEXT_PUBLIC_GA_ID,
  });
}

// ── React hook ───────────────────────────────────────────────

/**
 * useAnalytics() — convenience hook that returns a stable track fn.
 * Use inside components instead of calling track() directly so you
 * can easily swap the backend later.
 */
export function useAnalytics() {
  return { track };
}
