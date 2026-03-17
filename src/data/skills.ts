export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Core Languages",
        skills: ["Java", "JavaScript", "TypeScript", "C++", "Python"],
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "React Native", "Next.js", "NestJS", "Node.js"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Linux", "Firebase", "Supabase", "Playwright"],
    },
    {
        title: "Domains",
        skills: [
            "Machine Learning",
            "Web Security",
            "REST APIs",
            "Computer Vision",
            "System Design",
        ],
    },
];

export const techStrip: string[] = [
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "React",
    "NestJS",
    "Firebase",
    "Git",
    "Linux",
];

export const currentlyExploring: string[] = [
    "Backend system design and scalable architecture patterns",
    "Web security fundamentals and vulnerability analysis",
    "Building full-stack applications end-to-end",
];
