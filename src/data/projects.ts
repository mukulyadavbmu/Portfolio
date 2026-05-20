export interface Project {
  id: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  githubUrl: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "vulnforge",
    title: "VulnForge",
    description:
      "Automated security testing platform utilizing Playwright for network interception and crawling. Integrated AI logic to dynamically identify and verify 11+ vulnerability classes, including SQLi, XSS, IDOR, and CORS misconfigurations.",
    highlight:
      "Automated Security Testing Platform",
    tags: ["TypeScript", "React", "Playwright", "LLM Integration", "Security"],
    githubUrl: "https://github.com/mukulyadavbmu/VULNFORGE",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/VULNFORGE",
    featured: true,
  },
  {
    id: "sandhawk",
    title: "SandHawk",
    description:
      "Defensive URL investigation sandbox for analyzing suspicious pages, extracting indicators of compromise (Domains, IPs, Emails), and generating analyst-facing reports. Features phishing heuristics and risk scoring workflows.",
    highlight:
      "Defensive URL Sandbox",
    tags: ["Python", "FastAPI", "React", "Docker", "Playwright", "Security Analysis"],
    githubUrl: "https://github.com/mukulyadavbmu/SandHawk",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/SandHawk",
    featured: true,
  },
  {
    id: "eduvora",
    title: "Eduvora",
    description:
      "A modern, interactive web application designed to help students navigate education financing, compare loan options, and plan their financial future. Features loan eligibility calculators and simulation dashboards.",
    highlight:
      "Education Finance Platform",
    tags: ["JavaScript", "React", "Vite", "CSS3"],
    githubUrl: "https://github.com/mukulyadavbmu/Eduvora",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/Eduvora",
    featured: true,
  },
];
