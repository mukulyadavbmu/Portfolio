"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Timeline", href: "/#experience" },
  { label: "Credentials", href: "/#certifications" },
  { label: "Projects", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[rgba(26,26,26,0.95)] border-b border-[#333] px-4 md:px-8 py-4 z-50 backdrop-blur font-mono">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-[var(--accent-green)] text-lg md:text-xl font-bold cursor-pointer"
        >
          &gt;_developer.sh <span className="text-gray-500 font-normal text-sm md:text-base">· mukulyadav</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white hover:text-[var(--accent-green)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[var(--accent-green)] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-[var(--accent-green)] transition-opacity duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-[var(--accent-green)] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-surface)] border-b border-[var(--border)] py-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-white hover:text-[var(--accent-green)] px-6 py-3 border-b border-[var(--border-subtle)] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
