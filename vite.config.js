import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import preprocess from "svelte-preprocess";

const config = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png'],
			manifest: {
				name: 'pwa5-n',
				short_name: 'pwa5-s',
				description: 'pwa #5',
				start_url: '.',
				scope: '.',
				display: 'standalone',
				theme_color: '#eff',
				background_color: '#fff',
				icons: [
					{
						src: 'icon-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable'
					},
					{
						src: 'icon-512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	],
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
