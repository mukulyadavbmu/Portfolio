// ============================================================
// src/lib/paths.ts
// Utility function to handle dynamic asset paths for GitHub Pages subpath deployment.
// ============================================================

/**
 * getAssetPath() — Appends the NEXT_PUBLIC_BASE_PATH to absolute asset paths.
 * Safe to use in both server-side (SSG) and client-side (hydration) environments.
 * 
 * Example:
 * getAssetPath("/MUKUL_YADAV_BMU.pdf") -> "/Portfolio/MUKUL_YADAV_BMU.pdf" (on GitHub Pages)
 * getAssetPath("/MUKUL_YADAV_BMU.pdf") -> "/MUKUL_YADAV_BMU.pdf" (locally)
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return path;
  
  // Clean path to prevent double slashes
  const cleanPath = path.replace(/\/+/g, "/");
  const cleanBasePath = basePath.replace(/\/+$/, "");
  
  return `${cleanBasePath}${cleanPath}`;
}
