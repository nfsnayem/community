// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
    			light: './src/assets/light-logo.svg',
    			dark: './src/assets/dark-logo.svg',
  			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nfsnayem/community' }],
			sidebar: [
				{
					label: 'Plugins',
					autogenerate: { directory: 'plugins' },
				},
				{
					label: 'Themes',
					autogenerate: { directory: 'themes' },
				},
				{
					label: 'Template Kits',
					autogenerate: { directory: 'templates' },
				},
			],
		}),
	],
});
