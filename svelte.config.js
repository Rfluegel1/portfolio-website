import adapter from '@sveltejs/adapter-static';
import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        scss: {
            includePaths: ['src/styles', 'node_modules'],
            sourceMap: true,
            outputStyle: 'compressed',
            precision: 5,
            quietDeps: true,
            importer: function (url, prev, done) {
                // Custom import logic (if needed)
                return {file: url};
            }
        }
    }),
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            strict: false,
            pages: 'build',
            assets: 'build',
            fallback: 'index.html'
        }),
        prerender: {
            entries: ['*']
        }
    }
};

export default config;
