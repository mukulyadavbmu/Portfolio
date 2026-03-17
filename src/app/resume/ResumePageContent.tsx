"use client";

import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function ResumePageContent() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--accent-blue)] mb-3">
            Resume
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mukul Yadav
          </h1>
          <p className="text-[var(--text-secondary)]">
            B.Tech Engineering Student &mdash; BML Munjal University
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <a
            href="/MUKUL_YADAV_BMU.pdf"
            download="Mukul_Yadav_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-blue)] text-white font-semibold text-sm hover:bg-blue-400 transition-colors duration-200 shadow-lg shadow-blue-500/20"
          >
            <FiDownload size={15} />
            Download PDF
          </a>
          <a
            href="/MUKUL_YADAV_BMU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] font-semibold text-sm border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)]/50 transition-all duration-200"
          >
            <FiExternalLink size={15} />
            Open in new tab
          </a>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]"
          style={{ height: "80vh", minHeight: "600px" }}
        >
          <iframe
            src="/MUKUL_YADAV_BMU.pdf"
            className="w-full h-full"
            title="Mukul Yadav Resume"
          />
        </motion.div>
      </div>
    </div>
  );
}
