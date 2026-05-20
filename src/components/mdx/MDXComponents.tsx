import React from "react";

export const MDXComponents = {
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-[var(--border-subtle)] tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3 tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc pl-5 text-[var(--text-secondary)] space-y-2 mb-6">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal pl-5 text-[var(--text-secondary)] space-y-2 mb-6">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold text-white">
      {children}
    </strong>
  ),
  a: ({ href, children }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-blue)] hover:underline">
      {children}
    </a>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-2 border-[var(--accent-blue)] pl-4 italic text-[var(--text-muted)] my-6">
      {children}
    </blockquote>
  ),
  code: ({ className, children }: any) => {
    const isInline = !className;
    return isInline ? (
      <code className="bg-[var(--bg-surface)] text-[var(--text-primary)] px-1.5 py-0.5 rounded text-sm font-mono border border-[var(--border-subtle)]">
        {children}
      </code>
    ) : (
      <div className="rounded-lg overflow-hidden my-6 border border-[var(--border)] bg-[#0d0d0d] p-4">
        <code className={`text-sm font-mono text-gray-300 ${className}`}>
          {children}
        </code>
      </div>
    );
  },
  hr: () => <hr className="border-[var(--border)] my-12" />,
};
