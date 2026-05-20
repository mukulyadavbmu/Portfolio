# Portfolio Website PRD

## 1) Product goal

Build a **portfolio website** that makes a Tier-3 B.Tech student look **hireable for high-paying cybersecurity or security + software engineering roles**.

The website must do 3 things:

1. **Prove skill**
2. **Show evidence**
3. **Reduce recruiter effort**

It should not feel like a generic student page. It should feel like a candidate profile built for serious hiring.

---

# 2) Product strategy

## Primary user

* Recruiter
* Hiring manager
* Referral contact
* Interviewer

## Secondary user

* You, while applying and updating work
* Peers / mentors / evaluators

## Core positioning

The portfolio should answer these questions immediately:

* What role are you targeting?
* What is your strongest technical proof?
* Why should anyone trust your skills?
* What projects show real engineering ability?
* Why are you better than an average fresher?

---

# 3) What the website needs

## Must-have sections

| Section                  | Purpose                  | What it must show                                            |
| ------------------------ | ------------------------ | ------------------------------------------------------------ |
| Hero section             | Immediate positioning    | Target role, one-line summary, CTA buttons                   |
| About / Summary          | Personal positioning     | Who you are, what you focus on, what you are building toward |
| Skills                   | ATS + recruiter scanning | Cybersecurity, DSA, backend, cloud, tools                    |
| Projects                 | Main proof section       | 3–6 strong projects with real outcomes                       |
| Experience / Internships | Optional if available    | Only if meaningful                                           |
| Certifications           | Trust signal             | Security+, CEH, AWS, etc. if earned                          |
| Achievements             | Differentiation          | CTFs, contests, ranks, hackathons, open-source               |
| Resume download          | Conversion               | Clean PDF resume                                             |
| GitHub links             | Verification             | Proof of code quality                                        |
| LinkedIn link            | Professional trust       | External profile                                             |
| Contact section          | Conversion               | Email, LinkedIn, GitHub                                      |

## Strongly recommended sections

| Section                        | Why it matters                       |
| ------------------------------ | ------------------------------------ |
| Case study pages for projects  | Makes projects look real, not copied |
| Blog / writeups                | Shows thinking ability               |
| Problem-solving section        | Useful for security + SWE roles      |
| Lab / CTF section              | Strong for cybersecurity hiring      |
| Metrics / impact section       | Makes bullets believable             |
| Testimonials / recommendations | Optional but useful                  |

---

# 4) Product requirements by team, as if assigning to teams

## Team A: Product / Strategy

**Goal:** Define the positioning and story.

### Deliverables

* Decide target audience
* Decide target role track:

  * Pure cybersecurity
  * Security + software engineering
* Decide the headline message
* Decide priority order of sections
* Decide what to remove

### Example product decision

This portfolio should not try to show everything.
It should show:

* strong technical foundation
* visible proof of work
* serious interest in security
* enough software strength to qualify for high-paying roles

---

## Team B: Content / Copywriting

**Goal:** Write the actual words.

### Deliverables

* Hero headline
* About section
* Project descriptions
* Achievement bullets
* CTA text
* Resume summary
* Short bio for LinkedIn and GitHub consistency

### Copy style rules

* Clear
* Direct
* Quantified
* No fluff
* No fake claims
* No vague words like “passionate” unless backed by proof

### Example tone

Instead of:

> Passionate cybersecurity enthusiast

Use:

> B.Tech student focused on application security, backend engineering, and security automation, with projects in secure APIs, vulnerability scanning, and Linux-based tooling.

---

## Team C: Design / UI

**Goal:** Make the site look credible and clean.

### Deliverables

* Homepage layout
* Project cards
* Section spacing
* Mobile responsiveness
* Dark/light theme
* Visual hierarchy
* CTA button styling

### Design requirements

* Minimal
* Fast
* Professional
* No clutter
* No random animations
* No overdesigned gamer-style visuals

### Recommended visual style

* Dark mode first
* Strong typography
* Clean cards
* Simple icons
* Small accent colors only
* Easy scanability

---

## Team D: Frontend Development

**Goal:** Build the interface.

### Deliverables

* Responsive homepage
* Navigation
* Project cards
* Filtering/sorting if needed
* Resume download button
* GitHub/LinkedIn buttons
* Project case study pages
* Contact form or mail link

### Tech options

* React / Next.js
* Tailwind CSS
* Framer Motion for subtle animation
* Markdown or MDX for project writeups

---

## Team E: Backend / Data

**Goal:** Handle dynamic features if needed.

### Deliverables

* Contact form backend
* Email delivery
* Analytics events
* Blog CMS integration if needed
* Project data stored cleanly

### Optional stack

* Node.js
* Express / Next API routes
* Supabase / Firebase
* PostgreSQL
* Email service

---

## Team F: DevOps / Deployment

**Goal:** Make the site live, secure, and fast.

### Deliverables

* Deployment
* Domain setup
* HTTPS
* CDN
* Performance optimization
* Security headers
* Basic monitoring

### Requirements

* One-click deploy
* Fast load time
* SSL enabled
* Custom domain
* No broken links

---

## Team G: Content Verification / QA

**Goal:** Prevent lies and weak claims.

### Deliverables

* Check every claim
* Check every metric
* Check mobile layout
* Check spelling
* Check link validity
* Check resume consistency with site

### Rule

If a claim cannot be backed by a repo, certificate, contest result, or project demo, do not include it.

---

# 5) PRD in text form

## Product name

Portfolio website for cybersecurity and security + software engineering hiring.

## Problem statement

A Tier-3 student applying for high-paying roles often looks weak on paper because recruiters cannot quickly see:

* proof of skill
* project depth
* specialization
* coding strength
* security relevance

## Proposed solution

A portfolio website that presents the candidate as:

* technically credible
* project-driven
* security-aware
* software-capable
* easy to evaluate in under 2 minutes

## Success metrics

* Recruiters spend more than 30 seconds on site
* Resume downloads happen
* Project case studies are viewed
* GitHub clicks increase
* LinkedIn clicks increase
* Interview callbacks improve
* Referrals become easier

---

# 6) Functional requirements

| Requirement      | Description                         |
| ---------------- | ----------------------------------- |
| Home page        | Clear headline, role focus, CTA     |
| About section    | Short personal summary              |
| Skills section   | DSA, security, development, tools   |
| Projects section | Project cards with impact and links |
| Case study pages | Deep explanation for top projects   |
| Resume button    | Downloadable PDF                    |
| GitHub button    | Direct repository link              |
| LinkedIn button  | Direct profile link                 |
| Contact form     | Email/contact capture               |
| Mobile support   | Fully responsive                    |
| SEO basics       | Meta title, description, Open Graph |
| Dark mode        | Preferred for technical audience    |

---

# 7) Non-functional requirements

| Requirement     | Standard                            |
| --------------- | ----------------------------------- |
| Load speed      | Fast on mobile                      |
| Security        | HTTPS, form validation, safe inputs |
| Responsiveness  | Works on phone, tablet, laptop      |
| Accessibility   | Readable contrast, keyboard usable  |
| Maintainability | Easy to update projects             |
| Reliability     | No broken assets/links              |
| Professionalism | No noisy or childish design         |

---

# 8) What sections should be strongest

## For cybersecurity track

The strongest sections are:

1. Projects
2. Labs / CTFs / writeups
3. Security tools and skills
4. Certifications
5. Case studies

## For security + software engineering

The strongest sections are:

1. Projects
2. DSA profile
3. Backend/system design proof
4. Cloud / DevOps proof
5. GitHub quality

---

# 9) What each project card should contain

| Field             | Why it matters          |
| ----------------- | ----------------------- |
| Project title     | Easy scanning           |
| One-line summary  | Fast understanding      |
| Problem solved    | Shows purpose           |
| Tech stack        | Recruiter keyword match |
| Your contribution | Ownership               |
| Security angle    | Differentiation         |
| Result / metric   | Proof                   |
| GitHub link       | Verification            |
| Live demo         | Strong signal           |
| Writeup link      | Depth                   |

---

# 10) Example homepage structure

## Hero

* Name
* Target role
* One-line value statement
* Buttons:

  * View Projects
  * Download Resume
  * GitHub
  * LinkedIn

## Below hero

* 3 highlight cards:

  * Cybersecurity
  * Backend / Full Stack
  * DSA / Problem Solving

## Then:

* Project section
* Skills section
* Certifications
* Achievements
* Contact

---

# 11) What makes the portfolio good enough for hiring

A strong portfolio must do at least one of these:

* show a real deployed product
* show security tooling
* show a serious backend system
* show depth beyond tutorial code
* show measurable improvement
* show research/writeup ability
* show command over engineering basics

A weak portfolio:

* only lists technologies
* has cloned tutorial projects
* has no deployment
* has no README
* has no explanation
* has no proof of ownership

---

# 12) Minimum viable version

If you are building fast, the first version should include:

* Hero section
* About section
* 3 strong projects
* Skills section
* Resume link
* GitHub link
* LinkedIn link
* Contact section

That is enough to launch.

---

# 13) Best-practice content rules

## Do

* use numbers
* use real outcomes
* use clear labels
* keep it short
* show code and demos
* keep everything consistent with resume

## Do not

* overstate achievements
* copy template wording
* add too many weak projects
* add irrelevant visuals
* use paragraphs where bullets work better

---

# 14) PRD acceptance criteria

The portfolio is ready when:

* it loads cleanly on mobile
* every project has a clear explanation
* resume and portfolio match exactly
* GitHub links work
* LinkedIn link works
* at least 3 projects are strong enough to discuss in interviews
* one visitor can understand your target role in 10 seconds

---

# 15) Recommended final scope

## Phase 1

* Home page
* About
* Projects
* Skills
* Resume
* Links
* Contact

## Phase 2

* Case studies
* Blog/writeups
* Achievement timeline
* Project filters

## Phase 3

* CMS
* Analytics
* Advanced animations
* Dark/light theme toggle
* Better SEO

---

# 16) Final instruction to teams

Build this portfolio as a **proof-of-work machine**, not a decoration project.

The site should make a recruiter think:

* this candidate knows what they are doing
* this candidate has shipped things
* this candidate can explain technical work
* this candidate is worth interviewing

If needed, I can turn this into a **full website sitemap + wireframe + homepage copy + section-by-section content**.
