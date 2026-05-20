"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { track } from "@/lib/analytics";

export default function ResumePageContent() {
  // Track that the resume page was viewed
  useEffect(() => {
    track({ name: "resume_view", params: { method: "page_load" } });
  }, []);

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
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-3">
            &gt; resume
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mukul Yadav
          </h1>
          <p className="text-[var(--text-secondary)]">
            Security Engineer &mdash; BML Munjal University
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {/* Download — fires resume_download event */}
          <a
            href="/MUKUL_YADAV_BMU.pdf"
            download="Mukul_Yadav_Resume.pdf"
            onClick={() =>
              track({ name: "resume_download", params: { method: "download" } })
            }
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[var(--accent-blue)] text-white font-medium text-sm hover:bg-blue-500 transition-colors duration-200"
          >
            <FiDownload size={15} />
            Download PDF
          </a>

          {/* Open in new tab — fires resume_view event */}
          <a
            href="/MUKUL_YADAV_BMU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track({ name: "resume_view", params: { method: "new_tab" } })
            }
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[var(--bg-card)] text-[var(--text-secondary)] font-medium text-sm border border-[var(--border)] hover:text-white hover:border-[var(--accent-blue)] transition-all duration-200"
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
          className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] p-1"
          style={{ height: "80vh", minHeight: "600px" }}
        >
          <iframe
            src="/MUKUL_YADAV_BMU.pdf"
            className="w-full h-full rounded-lg"
            title="Mukul Yadav Resume"
          />
        </motion.div>
      </div>
    </div>
  );
}
