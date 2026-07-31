# Klyde Dexter Fonte — Data Analyst Portfolio

Personal portfolio built with [Astro 7](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), showcasing expertise in data analytics, statistical modeling, exploratory data analysis (EDA), data visualization (Tableau, Looker), spreadsheets (Excel, Google Sheets), and machine learning (Python, R, SQL). Features detailed data case studies (including a 1.2M record Casino Player Analysis), content collections, and an embedded resume viewer.

---

## 🚀 Key Features

- **⚡ Fast Static Site Generation**: Built with Astro 7 static output for ultra-fast page load speeds and SEO efficiency.
- **🎨 Modern Design System**: Tailwind CSS v4 styling with `@tailwindcss/vite`, custom `@theme` fonts (*Plus Jakarta Sans* headings & *Inter* body), ambient radial glows, and responsive layout primitives.
- **📊 Data Analytics Focus**: Highlighted skills categorized across Technical skills (SQL, Google Sheets, Excel, Pivot tables, Data visualization with Tableau & Looker, Python, R, Machine learning, Data preparation), Analytical skills (Critical thinking, Problem-solving, Attention to detail), Communication skills, and Industry-specific skills.
- **📁 Content Collections**:
  - **Projects (`src/content/projects/`)**: Detailed Markdown data case studies (*Long-Term Casino Player Analysis*, *Water Potability Prediction & Analysis*, and *DevPath*) with key analytical insights, statistical findings, technical architecture decisions, tag metadata, and visualization galleries.
  - **Education (`src/content/education/`)**: Structured JSON data files for academic degrees, institutions, and key focus areas.
  - **Certifications (`src/content/certifications/`)**: Structured JSON entries for professional credentials with badge images, issue dates, and verification links.
- **📄 Viewable & Downloadable Resume (`/resume`)**:
  - Embedded responsive PDF viewer frame.
  - Structured, accessible Web Resume view for mobile screens and screen readers.
  - Direct PDF download and tab view actions (`public/klyde-fonte-resume.pdf`).
- **📱 Responsive Mobile Navigation**: Sticky glassmorphism navbar with a smooth mobile hamburger drawer menu.
- **✉️ Asynchronous Contact Form**: Formspree integration with client-side `fetch()` submission, loading spinner button state, and inline success/error alert banners.
- **🌐 Comprehensive SEO & Structured Data (JSON-LD)**:
  - Automated XML sitemap compilation (`sitemap-index.xml`) via `@astrojs/sitemap`.
  - Schema.org JSON-LD structured data (`Person`, `WebSite`, `SoftwareApplication`, `BreadcrumbList`) for rich Google search snippets.
  - Enhanced Open Graph tags, Twitter Card metadata, canonical URLs, keywords, and theme-color configurations in `Layout.astro`.

---

## 🛠️ Project Structure

```text
klyde-fonte-portfolio/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt                   # Crawler rules referencing sitemap-index.xml
│   ├── klyde-fonte-resume.pdf       # Downloadable & Viewable Resume PDF
│   └── images/                      # Project screenshots, certificate badges, & casino case study visualizations
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── SEO/                     # JSON-LD Schema.org components
│   │   │   ├── PersonSchema.astro   # Person & WebSite JSON-LD schemas
│   │   │   ├── ProjectSchema.astro  # SoftwareApplication & Breadcrumb schemas
│   │   │   └── BreadcrumbSchema.astro # Navigation BreadcrumbList schema
│   │   ├── Navbar.astro             # Sticky header with mobile drawer
│   │   ├── Footer.astro             # Footer with copyright & social links
│   │   ├── Hero.astro               # Hero banner with status indicator
│   │   ├── ProjectCard.astro        # Project card with tag data attributes
│   │   ├── EducationCard.astro      # Education timeline card
│   │   ├── CertificationCard.astro  # Certification badge card with images
│   │   └── ContactForm.astro        # Async Formspree contact form
│   ├── content/                     # Data & Markdown content entries
│   │   ├── projects/                # Markdown case study entries (*.md)
│   │   ├── education/               # Education JSON entries (*.json)
│   │   └── certifications/          # Certification JSON entries (*.json)
│   ├── content.config.ts            # Astro 7 Content Collections config
│   ├── layouts/
│   │   └── Layout.astro             # Global HTML layout, Google Fonts, & OG/SEO metadata
│   ├── pages/                       # File-based routes
│   │   ├── index.astro              # Home page with project filter & credentials
│   │   ├── about.astro              # About page with skills matrix & timeline
│   │   ├── resume.astro             # Resume page with PDF viewer & web view
│   │   └── projects/
│   │       └── [...slug].astro      # Dynamic project case study pages
│   └── styles/
│       └── global.css               # Tailwind v4 import & theme definitions
├── astro.config.mjs                 # Astro configuration (site URL, @astrojs/sitemap & @astrojs/vercel)
└── package.json
```

---

## 💻 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install all dependencies |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run build` | Build static production bundle into `dist/` |
| `npm run preview` | Preview production build locally |

---

## 📝 Managing Content

### Adding a Project
1. Create a new `.md` file in `src/content/projects/` (e.g. `my-new-project.md`).
2. Include frontmatter fields: `title`, `description`, `image`, `gallery`, `liveUrl`, `githubUrl`, `tags`, `date`, `featured`.
3. Add markdown content under the frontmatter for the detailed case study.

### Adding an Education Entry
1. Create a new `.json` file in `src/content/education/` (e.g. `degree.json`).
2. Add JSON fields: `degree`, `institution`, `location`, `period`, `description`, `highlights`, `order`.

### Adding a Certification
1. Create a new `.json` file in `src/content/certifications/` (e.g. `cert-name.json`).
2. Add JSON fields: `title`, `issuer`, `issueDate`, `image` *(optional)*, `credentialId`, `credentialUrl`, `skills`, `order`.

---

## 🚀 Deployment

This portfolio is configured for **static deployment on Vercel** using `@astrojs/vercel`:
- Push changes to the `main` branch to trigger auto-deployment on Vercel.
- Build output path: `dist/` mapped to `.vercel/output/static`.
