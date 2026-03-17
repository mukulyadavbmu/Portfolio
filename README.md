# Mukul Yadav — Portfolio Website

A modern, professional portfolio website built with **Next.js 16**, **TailwindCSS 4**, and **Framer Motion**.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework, routing, SSR |
| TailwindCSS 4 | Styling |
| Framer Motion | Animations & scroll effects |
| React Icons | Icon library |
| TypeScript | Type safety |

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Run Locally

```bash
cd portfolio-temp
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Design tokens + global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # responsive navbar with scroll blur
│   │   └── Footer.tsx      # footer with nav links + socials
│   └── ui/
│       ├── ProjectCard.tsx      # animated project card
│       ├── ArchitectureFlow.tsx # animated system architecture diagram
│       └── SectionUI.tsx        # SectionWrapper, SectionHeader, SkillTag
├── sections/               # One file per portfolio section
│   ├── HeroSection.tsx
│   ├── TechStripSection.tsx
│   ├── AboutSection.tsx
│   ├── EngineeringApproachSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ArchitectureSection.tsx
│   ├── ExploringSection.tsx
│   ├── GitHubSection.tsx
│   ├── ResumeSection.tsx
│   └── ContactSection.tsx
└── data/
    ├── projects.ts         # Project data (sourced from GitHub only)
    └── skills.ts           # Skills data (verified from repos + resume)
```

## Portfolio Sections

1. **Hero** — Name, tagline, CTA buttons, animated dot grid background
2. **Tech Strip** — Scrolling technology tag strip
3. **About** — Honest bio + stat cards
4. **Engineering Approach** — Learning mindset and systems thinking
5. **Skills** — Tag-based skill categories (no percentage bars)
6. **Selected Work** — 4 real GitHub projects with technical highlights
7. **System Architecture** — Animated flow diagram (User → Frontend → API → Server → DB)
8. **Currently Exploring** — Active learning areas
9. **GitHub** — Repository cards + profile link
10. **Resume** — PDF preview + download button (MUKUL_YADAV_BMU.pdf)
11. **Contact** — Email, GitHub, LinkedIn + contact form

## Content Policy

All content is sourced strictly from:
- GitHub: https://github.com/mukulyadavbmu (repositories, READMEs)
- Resume: MUKUL_YADAV_BMU.pdf

No fabricated internships, invented experience, or exaggerated skills.

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):

1. Push this folder to a GitHub repo
2. Import into Vercel
3. Deploy — zero configuration needed

## Customization

- Update `src/data/projects.ts` to add/edit projects
- Update `src/data/skills.ts` to edit skill categories
- Replace `/public/MUKUL_YADAV_BMU.pdf` with your latest resume
- Edit contact links in `src/sections/ContactSection.tsx` and `src/components/layout/Footer.tsx`
