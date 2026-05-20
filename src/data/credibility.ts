// ============================================================
// credibility.ts — Source of truth for all credibility data.
// Only include items that are provable / verifiable.
// ============================================================

export interface SkillCategory {
  title: string;
  icon: string; // emoji icon for visual scanning
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity",
    icon: "🔒",
    skills: [
      "Dynamic Application Security Testing (DAST)",
      "Threat Modeling & Attack Surface Analysis",
      "Automated Vulnerability Scanning",
      "Phishing & IOC Investigation",
      "CORS / IDOR / XSS / SQLi Analysis",
      "Sandbox Isolation Design",
    ],
  },
  {
    title: "Backend Engineering",
    icon: "⚙️",
    skills: [
      "REST API Design (FastAPI, NestJS)",
      "SQLAlchemy / PostgreSQL / Supabase",
      "Async task queues & job workers",
      "JWT & RBAC Authentication",
      "WebSocket real-time communication",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: "🐳",
    skills: [
      "Docker (ephemeral containers)",
      "CI/CD fundamentals (GitHub Actions)",
      "Linux system administration",
      "Environment isolation & hardening",
    ],
  },
  {
    title: "Frontend & Tooling",
    icon: "⚡",
    skills: [
      "React / Next.js / Vite",
      "TypeScript (strict mode)",
      "Playwright (browser automation)",
      "Tailwind CSS / Component architecture",
    ],
  },
  {
    title: "CS Fundamentals",
    icon: "📐",
    skills: [
      "Data Structures & Algorithms (C++)",
      "Operating Systems concepts",
      "Computer Networks & TCP/IP",
      "Concurrency & async patterns",
    ],
  },
  {
    title: "Core Languages",
    icon: "💻",
    skills: [
      "Python",
      "TypeScript / JavaScript",
      "C++ (competitive programming)",
      "Java",
    ],
  },
];

// ============================================================

export interface Certification {
  title: string;
  issuer: string;
  date: string;           // e.g. "Jan 2025" or "In Progress"
  credentialUrl?: string;
  status: "earned" | "in-progress" | "planned";
  description?: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    status: "earned",
    description: "Foundations of cybersecurity, threat analysis, network security, and security operations.",
  },
  {
    title: "Security+",
    issuer: "CompTIA",
    date: "In Progress",
    status: "in-progress",
    description: "Industry baseline for security practitioners covering threats, vulnerabilities, and enterprise controls.",
  },
];

// ============================================================

export interface Achievement {
  title: string;
  context: string;
  date: string;
  proof?: string;          // URL or textual evidence
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    title: "Won HACK KRMU 5.0",
    context:
      "Winner of Hack KRMU 5.0 hackathon at KR Mangalam University, demonstrating rapid prototyping and problem-solving skills under pressure.",
    date: "Feb 2026",
    tags: ["Hackathon", "Winner", "Prototyping"],
  },
  {
    title: "Built VulnForge — DAST Scanner from scratch",
    context:
      "Independently architected and shipped a full dynamic analysis platform that identifies 11+ vulnerability classes using Playwright network interception.",
    date: "Feb 2026",
    proof: "https://github.com/mukulyadavbmu/VULNFORGE",
    tags: ["Security Tooling", "TypeScript", "Playwright"],
  },
  {
    title: "Built SandHawk — URL Investigation Sandbox",
    context:
      "Designed an ephemeral Docker-based sandbox for safe detonation of suspicious URLs, with IOC extraction and phishing heuristics — solving a real SOC analyst workflow problem.",
    date: "May 2026",
    proof: "https://github.com/mukulyadavbmu/SandHawk",
    tags: ["Defensive Security", "Python", "Docker"],
  },
  {
    title: "Shipped Eduvora to Production",
    context:
      "Deployed a complex finance web application (loan simulations, amortization calculators) to production on Vercel, achieving fast Lighthouse performance scores.",
    date: "Apr 2026",
    proof: "https://eduvora-tau.vercel.app",
    tags: ["Production", "React", "Vite"],
  },
];

// ============================================================

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  tags: string[];
  type: "project" | "education" | "cert" | "milestone";
}

export const timeline: TimelineItem[] = [
  {
    period: "May 2026",
    title: "SandHawk: Defensive URL Sandbox",
    description:
      "Built an isolated, Docker-based phishing investigation tool. First project applying ephemeral container orchestration to a real security workflow.",
    tags: ["Python", "FastAPI", "Docker", "Playwright"],
    type: "project",
  },
  {
    period: "Apr 2026",
    title: "Eduvora: Production Deployment",
    description:
      "Shipped a React-based education finance platform to Vercel. First independently-deployed production app with real users.",
    tags: ["React", "Vite", "Production"],
    type: "milestone",
  },
  {
    period: "Feb 2026",
    title: "VulnForge: Automated DAST Platform",
    description:
      "Designed and shipped the first version of VulnForge — a security scanner that identifies CORS, SQLi, XSS, and IDOR vulnerabilities using live browser automation.",
    tags: ["TypeScript", "Playwright", "Security"],
    type: "project",
  },
  {
    period: "Feb 2026",
    title: "Hack KRMU 5.0 Winner",
    description:
      "Won the Hack KRMU 5.0 hackathon at KR Mangalam University out of many participating teams.",
    tags: ["Hackathon", "Winner"],
    type: "milestone",
  },
  {
    period: "Jan 2025",
    title: "Google Cybersecurity Certificate",
    description:
      "Completed structured study of threat analysis, network security, and incident response foundations.",
    tags: ["Certification", "Security Fundamentals"],
    type: "cert",
  },
  {
    period: "2024–Present",
    title: "B.Tech CSE — BML Munjal University",
    description:
      "Pursuing Computer Science Engineering with a self-directed focus on application security, systems, and practical tooling. Hackathon winner - Hack KRMU 5.0 (Feb 2026).",
    tags: ["Education"],
    type: "education",
  },
];
