import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.MYPWA_BASE || '',
		},
		trailingSlash: 'always',
	}
};

export default config;
