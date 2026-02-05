import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
			author: z.string().optional(),
		}),
});

const events = defineCollection({
	loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			heroImage: image(),
			eventDateTime: z.coerce.date(),
			eventLocationName: z.string(),
			// optional
			// theme: either "bus", "mrt", or "walk"
			eventTheme: z.enum(["bus", "mrt", "walk"]).optional(),
			updatedDate: z.coerce.date().optional(),
			eventEndDateTime: z.coerce.date().optional(),
			eventSignupLink: z.string().url().optional(),
			eventLocationAddress: z.string().optional(),
			eventMeetup: z.string().optional(),
			eventMeetupTime: z.coerce.date().optional(),
			eventJoinLimit: z.number().optional(),
			eventSignUpDeadline: z.coerce.date().optional(),
			eventPrice: z.number().optional(),
			tags: z.array(z.string()).optional(),
			eventContact: z.string().optional(),
			// "students", "all"
			eventEligibility: z.enum(["students", "all"]).optional(),
			eventEligibilityDetails: z.string().optional(),
		}),
});

export const collections = { blog, events };
