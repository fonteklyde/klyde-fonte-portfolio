import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    period: z.string(),
    description: z.string().optional(),
    highlights: z.array(z.string()).optional(),
    order: z.number().default(1),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/certifications' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issueDate: z.string(),
    image: z.string().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().optional(),
    skills: z.array(z.string()).optional(),
    featured: z.boolean().default(true),
    order: z.number().default(1),
  }),
});

export const collections = { projects, education, certifications };
