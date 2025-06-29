// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	trailingSlash: 'never',
	redirects: {
		'/about': 'https://${SITE_BASE_DOMAIN}/about',
		'/news': {
			status: 302,
			destination: 'https://${SITE_BASE_DOMAIN}/news',
		},
	},
})
