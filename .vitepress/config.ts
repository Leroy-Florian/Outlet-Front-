import { defineConfig } from 'vitepress'

// Served at the domain root by default; override with SITE_BASE when hosted
// under a sub-path (e.g. '/Outlet-Front-/' on GitHub Pages project sites).
const base = process.env.SITE_BASE ?? '/'

const github = 'https://github.com/Leroy-Florian/Outlet-CLI'

export default defineConfig({
  base,
  title: 'Outlet',
  description:
    'A copy-paste registry of backend infrastructure for .NET — one generic port, swappable adapters.',
  cleanUrls: true,
  lastUpdated: true,

  head: [['meta', { name: 'theme-color', content: '#7c5cff' }]],

  // English is the default locale (served at the root); French lives under /fr/.
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/guide/introduction' }],
        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is Outlet?', link: '/guide/introduction' },
                { text: 'Getting started', link: '/guide/getting-started' },
              ],
            },
            {
              text: 'Contributing',
              items: [
                { text: 'Testing strategy', link: '/testing' },
                { text: 'Production readiness', link: '/production-readiness' },
              ],
            },
          ],
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/fr/guide/introduction' }],
        sidebar: {
          '/fr/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: "Qu'est-ce qu'Outlet ?", link: '/fr/guide/introduction' },
                { text: 'Démarrage', link: '/fr/guide/getting-started' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: 'github', link: github }],
    search: { provider: 'local' },
  },
})
