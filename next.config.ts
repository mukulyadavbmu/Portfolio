import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "Portfolio";

// ── Security Headers ─────────────────────────────────────────
// These apply when running `next dev` or `next start`.
// For static export (GitHub Pages), set these in vercel.json or _headers.
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  output: "export",

  // Images: unoptimized for static export (no Image Optimization API)
  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",

  // Security headers (effective in dev + next start; not in static export)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Explicitly mark known external packages as server-only
  // so they are never accidentally bundled into client JS
  serverExternalPackages: ["gray-matter"],
};

export default nextConfig;
