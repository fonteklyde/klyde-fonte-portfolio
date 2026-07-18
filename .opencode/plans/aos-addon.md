# AOS (Animate on Scroll) — Add-on

## 1. Layout.astro — add CDN CSS + JS + init

**File:** `src/layouts/Layout.astro`

### In `<head>` (after `<title>` line):

```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
```

### Before `</body>` (after `<Footer />`):

```html
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>AOS.init();</script>
```

## 2. index.astro — replace custom animation classes with data-aos

**File:** `src/pages/index.astro`

Replace the project card wrapper div:

```astro
{projects.map((project, i) => (
  <div class={`animate-fade-in delay-${Math.min(i + 1, 3)}`}>
    <ProjectCard project={project} />
  </div>
))}
```

with:

```astro
{projects.map((project, i) => (
  <div data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
    <ProjectCard project={project} />
  </div>
))}
```

Also add `data-aos="fade-up"` to the testimonials section heading and `data-aos-delay` on each testimonial card wrapper:

```astro
<section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20" data-aos="fade-up">
```

## 3. global.css — remove custom keyframes (replaced by AOS)

**File:** `src/styles/global.css`

Delete these lines (AOS handles scroll animations now):

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.5s ease forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
```

## Verification

```sh
npm run build
```

Should output **8 pages** (same as before) — no new routes, just enhanced animations.
