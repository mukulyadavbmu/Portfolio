"use client";

import { motion } from "framer-motion";

const flowSteps = [
    {
        id: "user",
        label: "User",
        sublabel: "Browser / Mobile",
        icon: "👤",
        color: "from-blue-500/20 to-blue-600/10",
        borderColor: "border-blue-500/30",
        textColor: "text-blue-400",
    },
    {
        id: "frontend",
        label: "Frontend",
        sublabel: "React / Next.js",
        icon: "⚛️",
        color: "from-purple-500/20 to-purple-600/10",
        borderColor: "border-purple-500/30",
        textColor: "text-purple-400",
    },
    {
        id: "api",
        label: "API Layer",
        sublabel: "REST / GraphQL",
        icon: "🔌",
        color: "from-cyan-500/20 to-cyan-600/10",
        borderColor: "border-cyan-500/30",
        textColor: "text-cyan-400",
    },
    {
        id: "server",
        label: "Server Logic",
        sublabel: "Node.js / NestJS",
        icon: "⚙️",
        color: "from-green-500/20 to-green-600/10",
        borderColor: "border-green-500/30",
        textColor: "text-green-400",
    },
    {
        id: "database",
        label: "Database",
        sublabel: "Supabase / Firebase",
        icon: "🗄️",
        color: "from-orange-500/20 to-orange-600/10",
        borderColor: "border-orange-500/30",
        textColor: "text-orange-400",
    },
];

function Arrow({ index }: { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
            className="flex items-center justify-center"
        >
            {/* Desktop arrow (horizontal) */}
            <div className="hidden md:flex items-center gap-1">
                <div className="w-8 h-px bg-gradient-to-r from-[var(--accent-blue)]/50 to-[var(--accent-purple)]/50" />
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[var(--accent-blue)]" />
            </div>
            {/* Mobile arrow (vertical) */}
            <div className="md:hidden flex flex-col items-center gap-1">
                <div className="w-px h-6 bg-gradient-to-b from-[var(--accent-blue)]/50 to-[var(--accent-purple)]/50" />
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[var(--accent-blue)]" />
            </div>
        </motion.div>
    );
}

export function ArchitectureFlow() {
    return (
        <div>
            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center">
                {flowSteps.map((step, i) => (
                    <div
                        key={step.id}
                        className="flex flex-col md:flex-row items-center gap-2 md:gap-3"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`relative flex flex-col items-center justify-center w-full md:w-36 p-4 rounded-xl bg-gradient-to-br ${step.color} border ${step.borderColor} backdrop-blur-sm cursor-default group`}
                        >
                            {/* Step number */}
                            <span className="absolute top-2 right-2 text-xs text-[var(--text-muted)] font-mono">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            {/* Icon */}
                            <span className="text-2xl mb-2">{step.icon}</span>
                            {/* Label */}
                            <span
                                className={`text-sm font-semibold ${step.textColor} text-center`}
                            >
                                {step.label}
                            </span>
                            {/* Sublabel */}
                            <span className="text-xs text-[var(--text-muted)] text-center mt-0.5">
                                {step.sublabel}
                            </span>
                            {/* Pulse dot */}
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut",
                                }}
                                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-current ${step.textColor} md:hidden`}
                            />
                        </motion.div>
                        {i < flowSteps.length - 1 && <Arrow index={i} />}
                    </div>
                ))}
            </div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto"
            >
                Understanding how requests flow from user interaction through frontend
                layers, API endpoints, server-side logic, and persistent storage —
                explored through hands-on projects.
            </motion.p>
        </div>
    );
}
