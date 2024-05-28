import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		outDir: 'build',
		sourcemap: true,  // Optional: useful for debugging
	},
	server: {
		port: 3000,  // Local development server port
	},
};

export default config;
