import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import CaseStudyTracker from "@/components/analytics/CaseStudyTracker";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.frontmatter.title} — Mukul Yadav`,
    description: project.frontmatter.description,
    keywords: project.frontmatter.keywords?.join(", "),
  };
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      
      <article className="pt-32 pb-24">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-6 mb-16">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors mb-8 font-mono">
            <FiArrowLeft /> back_to_projects
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {frontmatter.title}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
                {frontmatter.description}
              </p>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[var(--border-subtle)] mt-8">
            {frontmatter.role && (
              <div>
                <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">Role</span>
                <span className="text-sm text-white font-medium">{frontmatter.role}</span>
              </div>
            )}
            {frontmatter.deploymentStatus && (
              <div>
                <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">Status</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-surface)] text-[var(--accent-blue)] border border-[var(--border-subtle)]">
                  {frontmatter.deploymentStatus}
                </span>
              </div>
            )}
            {frontmatter.coreStack && (
              <div className="col-span-2">
                <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">Stack</span>
                <div className="flex flex-wrap gap-2">
                  {frontmatter.coreStack.map(tech => (
                    <span key={tech} className="text-xs text-[var(--text-secondary)]">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Links */}
          {(frontmatter.repoLinks || frontmatter.demoLinks) && (
            <div className="flex flex-wrap gap-4 mt-8">
              {frontmatter.repoLinks?.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Dynamic import to keep the Server Component clean
                    import("@/lib/analytics").then(({ track }) =>
                      track({ name: "github_click", params: { context: "case_study" } })
                    );
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-white text-sm font-medium hover:border-[var(--accent-blue)] transition-colors"
                >
                  <FiGithub /> {link.label}
                </a>
              ))}
              {frontmatter.demoLinks?.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--accent-blue)] text-white text-sm font-medium hover:bg-blue-500 transition-colors">
                  <FiExternalLink /> {link.label}
                </a>
              ))}
            </div>
          )}
          {/* Client-side analytics tracker — fires project_view event */}
          <CaseStudyTracker slug={params.slug} />
        </header>

        {/* Layout with Sticky Sidebar (TOC placeholder) & MDX Content */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          
          {/* Desktop TOC Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32">
              <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">Contents</span>
              <div className="text-sm text-[var(--text-secondary)] border-l border-[var(--border-subtle)] pl-4 py-1 space-y-3">
                {/* A proper robust TOC would parse headings. For MVP of the case study structure, we hardcode the standard sections or let the user scroll. */}
                <a href="#why-this-project-matters" className="block hover:text-white transition-colors">Why this project matters</a>
                <a href="#problem--motivation" className="block hover:text-white transition-colors">Problem & Motivation</a>
                <a href="#architecture" className="block hover:text-white transition-colors">Architecture</a>
                <a href="#implementation-details" className="block hover:text-white transition-colors">Implementation Details</a>
                <a href="#threat-model--attack-surface" className="block hover:text-white transition-colors">Threat Model / Attack Surface</a>
                <a href="#scalability-considerations" className="block hover:text-white transition-colors">Scalability</a>
                <a href="#measurable-results" className="block hover:text-white transition-colors">Measurable Results</a>
              </div>
            </div>
          </aside>

          {/* MDX Content Area */}
          <div className="flex-1 min-w-0 prose-container">
            {/* The MDXRemote component renders the markdown content using our custom components */}
            <MDXRemote source={content} components={MDXComponents} />
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
