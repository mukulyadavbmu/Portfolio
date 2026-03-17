"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "mukuly243@gmail.com",
    href: "mailto:mukuly243@gmail.com",
    color: "text-blue-400",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/mukulyadavbmu",
    href: "https://github.com/mukulyadavbmu",
    color: "text-purple-400",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mukulyadav",
    href: "https://www.linkedin.com/in/mukul-yadav-b0a714271/",
    color: "text-cyan-400",
  },
];

export default function ContactPageContent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `mailto:mukuly243@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--accent-blue)] mb-3">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s connect.
          </h1>
          <p className="text-[var(--text-secondary)] max-w-lg">
            Open to internship opportunities and engineering conversations.
            Reach out however is most convenient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-blue)]/30 transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform duration-200`}
                >
                  <link.icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
                    {link.label}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] group-hover:text-white transition-colors duration-200">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="c-name"
                  className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                >
                  Name
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="c-email"
                  className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                >
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="c-message"
                  className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="c-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors duration-200 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  sent
                    ? "bg-green-500 text-white"
                    : "bg-[var(--accent-blue)] text-white hover:bg-blue-400"
                }`}
              >
                {sent ? (
                  <>
                    <FiCheck size={15} />
                    Opening email client…
                  </>
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
