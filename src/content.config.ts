import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(['评测', '教程', '对比']),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  readingMinutes: z.number().int().positive().default(6),
  score: z.number().min(0).max(10).optional(),
  verdict: z.string().optional(),
  accent: z.enum(['orange', 'lime', 'pink', 'blue']).default('orange')
});

export const collections = {
  reviews: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
    schema: articleSchema
  }),
  guides: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
    schema: articleSchema
  }),
  compare: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/compare' }),
    schema: articleSchema
  })
};
