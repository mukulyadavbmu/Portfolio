"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export function SectionWrapper({
    id,
    children,
    className = "",
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative py-20 md:py-28 overflow-hidden ${className}`}
        >
            <div className="max-w-6xl mx-auto px-6">{children}</div>
        </section>
    );
}

interface SectionHeaderProps {
    label?: string;
    title: string;
    subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 md:mb-16"
        >
            {label && (
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--accent-blue)] mb-3">
                    {label}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

interface SkillTagProps {
    label: string;
    delay?: number;
}

export function SkillTag({ label, delay = 0 }: SkillTagProps) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-blue)]/40 hover:text-white transition-all duration-200"
        >
            {label}
        </motion.span>
    );
}
