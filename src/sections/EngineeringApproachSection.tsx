"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";

const approaches = [
    {
        icon: "🔨",
        title: "Learn by Building",
        description:
            "I understand systems best by constructing them from scratch. Projects like VulnForge and Aether emerged from wanting to understand how AI tooling and mobile full-stack architectures actually work in practice.",
    },
    {
        icon: "🔍",
        title: "Experiment Across Domains",
        description:
            "I don't constrain myself to a single stack or discipline. Whether it's deep learning for plant disease detection or backend APIs for a health app, curiosity drives me across different engineering areas.",
    },
    {
        icon: "⚙️",
        title: "Focus on Systems Thinking",
        description:
            "I find it more interesting to understand how components connect — how a request moves from a UI to an API to a database — than to master any single layer in isolation.",
    },
];

export default function EngineeringApproachSection() {
    return (
        <SectionWrapper
            id="approach"
            className="bg-[var(--bg-surface)]/30"
        >
            <SectionHeader
                label="Engineering Approach"
                title="How I think about building."
            />

            <div className="grid md:grid-cols-3 gap-6">
                {approaches.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.12 }}
                        className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-blue)]/30 transition-colors duration-300"
                    >
                        <span className="text-3xl mb-4 block">{item.icon}</span>
                        <h3 className="text-base font-semibold text-white mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
