// .vitepress/config.js
export default {
  title: 'ieve',
  titleTemplate: ':title - A enterprise component library',
  description: '测试',
  lang: 'zh-CN',

  themeConfig: {
    repo: 'element-plus/element-plus',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/guides/quickstart' },
        ]
      }
    ]
  },
}