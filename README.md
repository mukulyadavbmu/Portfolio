# Mukul Yadav — Security Engineer Portfolio

A polished, content-driven portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. The site is designed as a static export, which makes it straightforward to publish to **GitHub Pages** or any other static host.

## Highlights

- App Router architecture with strong SEO metadata and Open Graph support
- Static export output for simple GitHub Pages deployment
- Animated hero, featured work, skills, credibility, timeline, and CTA sections
- Project data sourced from real GitHub repositories and portfolio content only
- Lightweight analytics with optional GA4 tracking
- Resume download and mailto-based contact flow with no backend required

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | App Router, static export, routing, metadata |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling and layout |
| Framer Motion | Motion and section reveal effects |
| React Icons | Iconography |
| Google Analytics 4 | Optional privacy-aware event tracking |

## What’s Inside

- **Hero** with strong positioning and CTA buttons
- **Featured work** with project highlights and repository links
- **About** section with concise background and context
- **Skills** grouped by category instead of generic percentage bars
- **Credibility** and **timeline** sections to show real progress and milestones
- **Resume** and **contact** sections for direct follow-up

## Getting Started

### Prerequisites

- Node.js 20+ recommended, Node.js 22 matches the GitHub Actions workflow
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Locally

```bash
npm run build
```

For the GitHub Pages build path used by the deployment workflow:

```bash
npm run build:pages
```

### Start a Production Server

```bash
npm run start
```

## Environment Variables

Copy [.env.example](.env.example) to `.env.local` and fill in the values you want to use.

Required only if you want analytics and a canonical site URL:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://mukulyadav.dev
```

Notes:

- GA4 tracking is disabled in development and only loads in production when `NEXT_PUBLIC_GA_ID` is set.
- Contact form submissions open the user’s email client with a prefilled message; there is no server-side form handler.

## Deployment

### GitHub Pages

This repository includes [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) for automatic publishing to GitHub Pages on pushes to `master`.

The workflow:

1. Installs dependencies with `npm ci`
2. Builds the static site with `npm run build:pages`
3. Uploads the `out/` folder as the Pages artifact
4. Deploys it with GitHub Pages

If you are using a repository subpath on GitHub Pages, update the base path in [next.config.ts](next.config.ts) to match the repository name.

### Vercel

The project also works well on Vercel. Import the repository, add any environment variables you need, and deploy.

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts, analytics
│   ├── page.tsx            # Home page composition
│   ├── contact/            # Contact page
│   ├── resume/             # Resume page
│   └── work/               # Projects listing
├── components/
│   ├── analytics/          # GA4 helpers and event tracking
│   ├── layout/             # Navbar and footer
│   ├── mdx/                # MDX rendering helpers
│   └── ui/                 # Reusable UI components
├── sections/               # Home page sections
├── data/                   # Project and skills content
├── hooks/                  # Client hooks
└── lib/                    # Analytics, MDX, and asset path helpers
```

## Content Sources

This portfolio is intentionally grounded in real material:

- GitHub repositories and repository README files
- Resume content from `public/MUKUL_YADAV_BMU.pdf`

The site avoids fabricated internships, exaggerated claims, and placeholder project details.

## Customization

- Update [src/data/projects.ts](src/data/projects.ts) to change featured work and project cards
- Update [src/data/skills.ts](src/data/skills.ts) to adjust skill categories
- Edit [src/sections/ContactSection.tsx](src/sections/ContactSection.tsx) and [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) for contact links
- Replace [public/MUKUL_YADAV_BMU.pdf](public/MUKUL_YADAV_BMU.pdf) with your latest resume
- Update [next.config.ts](next.config.ts) if your deployment base path changes

## Troubleshooting

- If the build fails on an older Node version, switch to Node 20+ or Node 22.
- If GitHub Pages assets load incorrectly, confirm the `basePath` in [next.config.ts](next.config.ts) matches the repository name.
- If analytics do not appear, verify that `NEXT_PUBLIC_GA_ID` is set and that you are testing a production build.

## License

No license has been added yet. Add one before distributing the project publicly if you want others to reuse the code.
