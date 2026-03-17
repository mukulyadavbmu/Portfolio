"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function ResumeSection() {
    return (
        <SectionWrapper
            id="resume"
            className="bg-[var(--bg-surface)]/30"
        >
            <SectionHeader
                label="Resume"
                title="Download or preview."
                subtitle="A concise overview of my education, skills, and projects."
            />

            <div className="max-w-3xl mx-auto">
                {/* PDF Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] mb-6"
                    style={{ height: "500px" }}
                >
                    <iframe
                        src="/MUKUL_YADAV_BMU.pdf"
                        className="w-full h-full"
                        title="Mukul Yadav Resume"
                        aria-label="Resume preview"
                    />
                    {/* Fallback overlay message if iframe doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-card)] opacity-0 pointer-events-none">
                        <p className="text-[var(--text-muted)] text-sm">
                            Preview not available — download below.
                        </p>
                    </div>
                </motion.div>

                {/* Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="/MUKUL_YADAV_BMU.pdf"
                        download="Mukul_Yadav_Resume.pdf"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[var(--accent-blue)] text-white font-semibold text-sm hover:bg-blue-400 transition-colors duration-200 shadow-lg shadow-blue-500/20"
                    >
                        <FiDownload size={16} />
                        Download Resume
                    </a>
                    <a
                        href="/MUKUL_YADAV_BMU.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] font-semibold text-sm border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
                    >
                        <FiExternalLink size={16} />
                        Open in New Tab
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
