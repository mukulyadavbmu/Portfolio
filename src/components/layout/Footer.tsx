import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Architecture", href: "#architecture" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        icon: FiGithub,
        href: "https://github.com/mukulyadavbmu",
        label: "GitHub",
    },
    {
        icon: FiLinkedin,
        href: "https://linkedin.com/in/mukulyadav",
        label: "LinkedIn",
    },
    { icon: FiMail, href: "mailto:mukuly243@gmail.com", label: "Email" },
];

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Nav Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors duration-200"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] text-center">
                    <p className="text-xs text-[var(--text-muted)]">
                        © {year} Mukul Yadav. Built with Next.js, Tailwind CSS &amp; Framer
                        Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
