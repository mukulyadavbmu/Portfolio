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
  {
    id: "aether",
    title: "Aether",
    description:
      "AI-Powered health and productivity desktop assistant. Integrates intelligent agent workflows, natural language scheduling, state management, and highly-responsive user behavior analytics in a secure native runtime environment.",
    highlight:
      "AI Health & Productivity Orchestrator",
    tags: ["TypeScript", "React", "Node.js", "LLM Integration", "State Management"],
    githubUrl: "https://github.com/mukulyadavbmu/Aether",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/Aether",
    featured: false,
  },
  {
    id: "plant-disease-prediction",
    title: "Plant Disease Prediction",
    description:
      "Deep learning diagnostic engine for early agricultural crop disease identification. Developed a Convolutional Neural Network (CNN) architecture with high classification accuracy, exposed via payload-sanitized REST APIs.",
    highlight:
      "DL Crop Disease Diagnostics",
    tags: ["Python", "TensorFlow", "FastAPI", "Deep Learning", "CNN"],
    githubUrl: "https://github.com/mukulyadavbmu/Plant-disease-prediction",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/Plant-disease-prediction",
    featured: false,
  },
  {
    id: "time-economy",
    title: "Time Economy",
    description:
      "A front-end productivity system for analyzing and optimizing personal schedules. Features sleek interactive dashboards, time tracking widgets, and secure client-side storage for local offline usage.",
    highlight:
      "Productivity & Caching Dashboard",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Data Visualization"],
    githubUrl: "https://github.com/mukulyadavbmu/Time-economy",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/Time-economy",
    featured: false,
  },
  {
    id: "portfolio",
    title: "Cyber-Portfolio",
    description:
      "This fully-responsive, terminal-themed professional portfolio engineered with Next.js App Router and Framer Motion. Configured for automatic deployment to GitHub Pages, static assets optimization, and privacy-safe GA4 tracking.",
    highlight:
      "Modern Static-Export Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Actions"],
    githubUrl: "https://github.com/mukulyadavbmu/Portfolio",
    imageUrl: "https://opengraph.githubassets.com/1/mukulyadavbmu/Portfolio",
    featured: false,
  },
];
