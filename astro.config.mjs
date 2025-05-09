// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://yourusername.github.io', // Replace with your actual GitHub username
	base: '/website-eli-blog', // Replace with your repository name if necessary
	outDir: 'dist',
	integrations: [mdx(), sitemap()],
});
