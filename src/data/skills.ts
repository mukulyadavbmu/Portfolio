export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Application Security & Testing",
    skills: ["Vulnerability Analysis", "SQLi/XSS/IDOR", "Automated Crawling", "Playwright", "Threat Investigation"],
  },
  {
    title: "Backend & Architecture",
    skills: ["Node.js", "FastAPI", "REST API Design", "System Architecture", "PostgreSQL", "Supabase"],
  },
  {
    title: "Core Languages",
    skills: ["TypeScript", "Python", "C++", "Java", "JavaScript"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Docker", "Git", "Linux", "CI/CD fundamentals"],
  },
];

export const techStrip: string[] = [
  "TypeScript",
  "Python",
  "C++",
  "FastAPI",
  "Playwright",
  "Docker",
  "Linux",
];
