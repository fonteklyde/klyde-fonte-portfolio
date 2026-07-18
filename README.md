# Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `dist/` |
| `npm run astro ...` | Run Astro CLI commands |

## Stack

- **Framework:** Astro 7 (static output)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Typography:** `@tailwindcss/typography` for prose styling
- **Deploy:** Vercel (auto-deployed from `main` branch)

## Project structure

```
src/
├── content/
│   └── projects/       # Markdown project entries
├── components/         # Reusable UI components
├── layouts/            # Page layouts
├── pages/              # Route pages
│   ├── index.astro
│   ├── about.astro
│   └── projects/
│       └── [...slug].astro
└── styles/
    └── global.css      # Tailwind import + global styles
```

## Content

Project entries are markdown files in `src/content/projects/` with frontmatter for title, description, image, links, tags, and date. New projects can be added by creating a new `.md` file in that directory.

## Deploy

Push to `main` → automatically deployed via Vercel.
