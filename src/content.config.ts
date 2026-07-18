import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
