"use client";

import { motion } from "framer-motion";
import { FiShield, FiCrosshair, FiTarget, FiTool, FiCheckCircle } from "react-icons/fi";

export default function SecurityExperienceSection() {
  const vulnerabilities = [
    "SQL Injection",
    "XSS",
    "CSRF",
    "SSRF",
    "Broken Access Control",
    "Business Logic Flaws",
    "Path Traversal",
    "Parameter Manipulation",
  ];

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6 border-t border-[var(--border-subtle)]">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="cyber-section-heading text-4xl font-bold font-mono m-0">Practical Security Experience</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-1 hidden md:block"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 lg:p-10 shadow-[0_0_20px_rgba(0,255,140,0.05)] relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-green)] opacity-[0.03] blur-3xl rounded-full pointer-events-none -mt-32 -mr-32"></div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 flex items-center justify-center text-[var(--accent-green)]">
                <FiShield size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Cybersecurity Intern / Assistant Team Lead
              </h3>
            </div>
            <p className="text-lg text-[var(--text-secondary)] font-mono mb-1 flex items-center gap-2">
              UptoSkills <span className="text-gray-600">|</span> 6-Week Internship
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--accent-green)]/30 bg-[var(--accent-green)]/5 text-xs font-mono text-[var(--accent-green)] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse"></span>
              Authorized Scoped Testing
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                <FiCrosshair /> Core Focus
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Methodology-driven web application security assessment and manual penetration testing. Focused on reconnaissance, enumerating attack surfaces, identifying critical vulnerabilities, and analyzing session mechanics within authorized scopes.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                <FiCheckCircle /> Authorized Scope Exposure
              </h4>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li className="flex items-center gap-3 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[var(--accent-cyan)] before:rounded-full">
                  Flipkart scoped domains
                </li>
                <li className="flex items-center gap-3 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[var(--accent-cyan)] before:rounded-full">
                  *.payzippy.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                <FiTarget /> Tested Vulnerability Classes
              </h4>
              <div className="flex flex-wrap gap-2">
                {vulnerabilities.map((vuln) => (
                  <span
                    key={vuln}
                    className="text-xs px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded text-gray-300"
                  >
                    {vuln}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Details */}
          <div className="space-y-8 bg-[var(--bg-primary)]/50 p-6 rounded-lg border border-[var(--border-subtle)]">
            <div>
              <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Operational Workflow
              </h4>
              <ol className="text-sm text-gray-400 space-y-2 font-mono list-decimal list-inside">
                <li>Reconnaissance</li>
                <li>Enumeration</li>
                <li>Analysis</li>
                <li>Validation</li>
                <li>Reporting</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3 flex items-center gap-2">
                <FiTool /> Tools & Platforms
              </h4>
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Tools</span>
                  <p className="text-sm text-gray-300 font-mono">Burp Suite, Nmap, Kali Linux</p>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Platforms</span>
                  <p className="text-sm text-gray-300 font-mono">PortSwigger Web Security Academy, TryHackMe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
