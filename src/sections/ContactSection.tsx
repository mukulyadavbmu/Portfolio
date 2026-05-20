"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionUI";
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
        value: "linkedin.com/in/mukul-yadav-b0a714271",
        href: "https://www.linkedin.com/in/mukul-yadav-b0a714271",
        color: "text-cyan-400",
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoUrl = `mailto:mukuly243@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.open(mailtoUrl, "_blank");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <SectionWrapper id="contact">
            <SectionHeader
                label="Contact"
                title="Let's connect."
            />

            <div className="grid md:grid-cols-2 gap-12">
                {/* Left: Contact Links */}
                <div className="space-y-4">
                    {contactLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.12 }}
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

                {/* Right: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData((p) => ({ ...p, name: e.target.value }))
                                }
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors duration-200"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="contact-email"
                                className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData((p) => ({ ...p, email: e.target.value }))
                                }
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors duration-200"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="contact-message"
                                className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((p) => ({ ...p, message: e.target.value }))
                                }
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors duration-200 resize-none"
                                placeholder="What's on your mind?"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${submitted
                                    ? "bg-green-500 text-white"
                                    : "bg-[var(--accent-blue)] text-white hover:bg-blue-400"
                                }`}
                        >
                            {submitted ? (
                                <>
                                    <FiCheck size={16} />
                                    Sent — opening your email client
                                </>
                            ) : (
                                <>
                                    <FiSend size={16} />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
