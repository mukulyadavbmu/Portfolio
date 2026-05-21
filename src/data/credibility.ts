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
  certificateFile?: string; // path in /public/certificates/
  status: "earned" | "in-progress" | "planned";
  description?: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    certificateFile: "/certificates/google-cybersecurity-certificate.pdf",
    status: "earned",
    description:
      "8-course professional program covering threat analysis, network security, SIEM operations, Python automation, and security incident response.",
  },
  {
    title: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM / Coursera",
    date: "2024",
    certificateFile: "/certificates/ibm-professional-certificate.pdf",
    status: "earned",
    description:
      "Professional-level program covering security operations, threat intelligence, application security, and incident response workflows.",
  },
  {
    title: "IBM & ISC2 — Cybersecurity Specialization",
    issuer: "IBM & ISC2 / Coursera",
    date: "2024",
    certificateFile: "/certificates/ibm-isc2-certificate.pdf",
    status: "earned",
    description:
      "Joint IBM and ISC2 specialization covering security frameworks, governance, access controls, and compliance fundamentals.",
  },
  {
    title: "IoT Security Certificate",
    issuer: "Coursera",
    date: "2024",
    certificateFile: "/certificates/iot-security-certificate.pdf",
    status: "earned",
    description:
      "Focused study of Internet of Things security architecture, device authentication, network segmentation, and embedded systems threat modeling.",
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
      "First place at Hack KRMU 5.0, the annual hackathon organized by KR Mangalam University. Competed against teams across multiple colleges, demonstrating rapid prototyping, system design, and problem-solving under time pressure.",
    date: "Feb 2026",
    tags: ["Hackathon", "1st Place", "Competitive", "KR Mangalam University"],
  },
];

// ============================================================

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  tags: string[];
  type: "education" | "cert" | "milestone" | "internship";
}

export const timeline: TimelineItem[] = [
  {
    period: "Feb 2026",
    title: "Won HACK KRMU 5.0",
    description:
      "Placed first at Hack KRMU 5.0 hackathon at KR Mangalam University. Competed against multi-college teams — built and presented a working prototype under a strict time limit.",
    tags: ["Hackathon", "Winner", "Competitive Programming"],
    type: "milestone",
  },
  {
    period: "2024",
    title: "Google Cybersecurity Certificate",
    description:
      "Completed Google's 8-course professional cybersecurity program on Coursera. Topics: threat analysis, network security, SIEM operations, Python security scripting, and incident response.",
    tags: ["Certification", "Google", "Coursera"],
    type: "cert",
  },
  {
    period: "2024",
    title: "IBM Cybersecurity & ISC2 Certifications",
    description:
      "Completed IBM Professional Certificate and the IBM & ISC2 joint cybersecurity specialization. Covered security operations, threat intelligence, governance, access controls, and compliance.",
    tags: ["Certification", "IBM", "ISC2"],
    type: "cert",
  },
  {
    period: "2024",
    title: "IoT Security Certificate",
    description:
      "Completed IoT security certification covering embedded device authentication, network segmentation, and IoT-specific threat modeling.",
    tags: ["Certification", "IoT", "Security"],
    type: "cert",
  },
  {
    period: "2024 — Present",
    title: "B.Tech Computer Science — BML Munjal University",
    description:
      "Pursuing Computer Science Engineering at BML Munjal University with a self-directed specialization in application security, backend systems, and practical tooling. Hackathon winner and active builder.",
    tags: ["Education", "BML Munjal", "Computer Science"],
    type: "education",
  },
];
