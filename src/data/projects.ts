export interface Project {
  id: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "vulnforge",
    title: "VulnForge",
    description:
      "An AI-guided web vulnerability scanner that automates security testing workflows. Features Gemini AI for intelligent attack planning, Playwright-based crawling with network monitoring, and real-time detection across multiple vulnerability classes.",
    highlight:
      "Explores AI-assisted security analysis and automated vulnerability detection across 11+ vulnerability types including SQLi, XSS, IDOR, and CORS.",
    tags: ["TypeScript", "React", "AI/Gemini", "Security", "Playwright"],
    githubUrl: "https://github.com/mukulyadavbmu/VULNFORGE",
    featured: true,
  },
  {
    id: "aether",
    title: "Aether",
    description:
      "An AI-powered health and productivity life coach application. Integrates an AI wellness coach, GPS activity tracking, habit building, and AI-assisted journaling into a unified mobile experience.",
    highlight:
      "Explores full-stack mobile architecture with separate React Native frontend and NestJS backend communicating via REST APIs, backed by Supabase for data persistence.",
    tags: ["TypeScript", "React Native", "NestJS", "Supabase", "AI"],
    githubUrl: "https://github.com/mukulyadavbmu/Aether",
    featured: true,
  },
  {
    id: "plant-disease",
    title: "Plant Disease Prediction",
    description:
      "A deep learning system for identifying diseases in plants from images. Compares model performance using Digital Image Processing preprocessing versus raw images, with Baseline CNN and ResNet50 model implementations.",
    highlight:
      "Investigates how image preprocessing pipelines affect CNN model accuracy, using transfer learning with ResNet50 versus custom baseline architectures.",
    tags: ["Python", "Deep Learning", "CNN", "ResNet50", "Computer Vision"],
    githubUrl: "https://github.com/mukulyadavbmu/Plant-disease-prediction",
    featured: true,
  },
  {
    id: "time-economy",
    title: "Time Economy",
    description:
      "A gamified productivity web application built around a token economy. Users earn tokens through productive activities and spend them on rewards, adding a game-like layer to time management.",
    highlight:
      "Explores behavioral design patterns for productivity through a token-based incentive system with real-time state management via Firebase.",
    tags: ["JavaScript", "HTML", "CSS", "Firebase"],
    githubUrl: "https://github.com/mukulyadavbmu/Time-economy",
    featured: true,
  },
];
