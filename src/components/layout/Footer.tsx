import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const footerNav = [
  { label: "Projects", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mukulyadavbmu",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mukul-yadav-b0a714271",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:mukuly243@gmail.com",
    icon: FiMail,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Brand + copyright */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-mono text-sm font-bold tracking-widest text-[var(--text-primary)]"
          >
            <span className="text-[var(--accent-green)]">&gt;_</span>
            <span>mukul</span>
            <span className="text-[var(--accent-cyan)]">.sh</span>
          </Link>
          <p className="mt-1 text-xs text-[var(--text-muted)] font-mono">
            © {year} Mukul Yadav · Security Engineer · BML Munjal University
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {/* Page links */}
          <nav className="flex items-center gap-4">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors font-mono"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
