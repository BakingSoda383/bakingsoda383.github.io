// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import './style.css'

import update from './components/update.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('update' , update)
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
        
    giscusTalk({
        repo: 'BakingSoda383/bakingsoda383.github.io',
        repoId: 'R_kgDOQNmLBQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOQNmLBc4CxWc3',
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      // 可以使用 comment:false 序言在页面上单独关闭它
    );
  }
} satisfies Theme
