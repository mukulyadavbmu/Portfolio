import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
  role?: string;
  oneLineImpact?: string;
  coreStack?: string[];
  keyFocus?: string;
  deploymentStatus?: string;
  repoLinks?: { label: string; url: string }[];
  demoLinks?: { label: string; url: string }[];
}

export interface ProjectMDX {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getProjectBySlug(slug: string): ProjectMDX | null {
  try {
    const fullPath = path.join(contentDir, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading MDX for slug: ${slug}`, error);
    return null;
  }
}

export function getAllProjects(): ProjectMDX[] {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectMDX => project !== null);
}
