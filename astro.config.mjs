// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// 1. YOU MUST IMPORT THE PLUGIN HERE
import rehypeExternalLinks from 'rehype-external-links';

// Astro build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Nixgle Community',
            logo: {
                light: './src/assets/light-logo.svg',
                dark: './src/assets/dark-logo.svg',
                replacesTitle: true,
            },
            social: [
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/VmEGZW6SmW' },
                { icon: 'github', label: 'GitHub', href: 'https://github.com/nfsnayem/community' }
            ],
            sidebar: [
                { label: 'Home', link: '/' },
                { label: 'Plugins', autogenerate: { directory: 'plugins' } },
                { label: 'Themes', autogenerate: { directory: 'themes' } },
                { label: 'Template Kits', autogenerate: { directory: 'templates' } },
            ],
            editLink: {
                baseUrl: 'https://github.com/nfsnayem/community/edit/main/',
            },
            lastUpdated: true,
        }),
    ],
    // 2. PLUGINS HERE (Outside the integrations array)
    markdown: {
        rehypePlugins: [
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
        ],
    },
});