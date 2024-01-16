import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/matarito-vue/",
  title: "Matarito-vue",
  description: "A VitePress Site",
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yousef-Matar/matarito-vue' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yousef-matar-562472202/' }
    ]
  }
})
