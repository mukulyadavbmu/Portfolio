"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="cyber-section-heading text-4xl font-bold mb-12 font-mono">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-white mb-6 font-bold">
            Hi! I'm <span className="text-[var(--accent-green)]">Mukul Yadav</span>, a passionate Security Engineer
            who loves building robust backend systems and automated security tooling. <span className="text-gray-500 font-normal ml-2">— mukulyadav</span>
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I approach security through an engineering lens—understanding how systems are built is the prerequisite to securing them. My focus is on practical implementation: rather than relying solely on theoretical knowledge, I build the tools (like automated vulnerability scanners) and the complex backends to understand the full lifecycle of software vulnerabilities.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg p-6 text-center shadow-[0_0_20px_rgba(0,255,140,0.1)] hover:border-[var(--accent-green)] hover:-translate-y-1 transition-all">
              <div className="text-3xl font-bold text-[var(--accent-green)] mb-2 font-mono">10+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Projects</div>
            </div>
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg p-6 text-center shadow-[0_0_20px_rgba(0,255,140,0.1)] hover:border-[var(--accent-green)] hover:-translate-y-1 transition-all">
              <div className="text-3xl font-bold text-[var(--accent-green)] mb-2 font-mono">1st</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Hackathon</div>
            </div>
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg p-6 text-center shadow-[0_0_20px_rgba(0,255,140,0.1)] hover:border-[var(--accent-green)] hover:-translate-y-1 transition-all">
              <div className="text-3xl font-bold text-[var(--accent-green)] mb-2 font-mono">∞</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Curiosity</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-24"
        >
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,140,0.15)] font-mono text-sm">
            <div className="bg-black/30 px-4 py-3 border-b border-[var(--border)] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-red)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--accent-yellow)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--accent-green)]"></div>
              <span className="ml-auto text-gray-400 text-xs">about.js</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-gray-300 leading-loose">
<code><span className="text-[var(--accent-red)]">const</span> <span className="text-[var(--accent-yellow)]">engineer</span> = {'{'}
  <span className="text-[var(--accent-cyan)]">name</span>: <span className="text-[var(--accent-green)]">"Mukul Yadav"</span>,
  <span className="text-[var(--accent-cyan)]">role</span>: <span className="text-[var(--accent-green)]">"Security Engineer"</span>,
  <span className="text-[var(--accent-cyan)]">focus</span>: [
    <span className="text-[var(--accent-green)]">"Application Security"</span>,
    <span className="text-[var(--accent-green)]">"DAST Tooling"</span>,
    <span className="text-[var(--accent-green)]">"Secure Backend Dev"</span>
  ],
  <span className="text-[var(--accent-cyan)]">currentlyLearning</span>: [
    <span className="text-[var(--accent-green)]">"Advanced Exploit Dev"</span>,
    <span className="text-[var(--accent-green)]">"Cloud SecArch"</span>
  ],
  <span className="text-[var(--accent-cyan)]">philosophy</span>: <span className="text-[var(--accent-green)]">"Build it to break it, break it to secure it."</span>
{'}'};</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
