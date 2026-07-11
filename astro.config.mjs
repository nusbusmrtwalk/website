// @ts-check

import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	site: "https://nus.busmrtwalk.com",
	integrations: [mdx(), sitemap(), react()],
	markdown: {
		remarkPlugins: [[remarkToc, { heading: "Contents", maxDepth: 3 }]],
	},
});
