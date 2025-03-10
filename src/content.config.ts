import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		image: z.string().optional(),
		favorite: z.boolean().optional(),
		tags: z.array(z.string())
	}),
});

export const collections = { 'recipes': recipes };
