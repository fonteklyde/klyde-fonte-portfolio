## Dev

```
astro dev --background
astro dev stop | status | logs
```

Node >=22.12.0. No lint, typecheck, or test scripts configured.

## Deploy

Push to `main` → auto-deployed via Vercel (GitHub integration).  
Adapter: `@astrojs/vercel` (static mode) configured in `astro.config.mjs`.  
Build output: `dist/` → `.vercel/output/static`.

## Tailwind v4

Already wired via `@tailwindcss/vite`. Import syntax (not `@tailwind` directives):

```css
@import "tailwindcss";
```

## Content

Collection `projects` defined in `src/content.config.ts` (Astro 7 — **not** `src/content/config.ts`).

Loader: `glob()` from `astro/loaders` with `pattern` + `base`.  
`getCollection` / `render` from `astro:content`; entry `.id` = slug (not `.slug`).

Dynamic pages: `src/pages/projects/[...slug].astro`.

Prose styling via `@tailwindcss/typography` wired with `@plugin` in `global.css`.
