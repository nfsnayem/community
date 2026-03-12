// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nixgle Community',
			logo: {
    			light: './src/assets/light-logo.svg',
    			dark: './src/assets/dark-logo.svg',
				replacesTitle: true,
  			},
			// Social media
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/VmEGZW6SmW' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/nfsnayem/community' }
			],
			// Sidebar navigation
			sidebar: [
				{ 
					label: 'Home',
					link: '/' 
				},
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
			// Enable edit page
			editLink: {
				baseUrl: 'https://github.com/nfsnayem/community/edit/main/',
			},
			// Enable last updated date
			lastUpdated: true,
		}),
	],
});
