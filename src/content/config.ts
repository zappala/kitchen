import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const recipes = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		image: z.string().optional(),
		favorite: z.boolean().optional(),
		tags: z.array(z.string())
	}),
});

export const collections = { 'blog': blog, 'recipes': recipes };
