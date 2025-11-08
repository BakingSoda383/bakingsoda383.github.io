import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "苏打的小窝",
  description: "欢迎来到苏打的小窝，这是我的个人博客网站。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog' }
    ],

    sidebar: [
      {
        text: '博客',
        items: [
          { text: '前言', link: '/blog/index.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BakingSoda383/bakingsoda383.github.io' }
    ]
  },
  lastUpdated: true,
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  }
})
