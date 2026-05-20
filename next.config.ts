import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
// Set to "" if you are deploying to a custom domain or user page (mukulyadavbmu.github.io)
// Otherwise, set to your GitHub repository name (e.g., "Portfolio")
const repoName = "Portfolio";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",

  // Images: unoptimized for static export (no Image Optimization API)
  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // Explicitly mark known external packages as server-only
  // so they are never accidentally bundled into client JS
  serverExternalPackages: ["gray-matter"],

  // Inject env variables at build-time for client-side and server-side code
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
