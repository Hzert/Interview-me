module.exports = {
  title: '前端文档',
  description: '一些前端的知识收集文档',
  head: [
    ['link', {rel: 'icon', href: '/logo.ico'}]
  ],
  base: '/bar/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'},
      { text: '测试', link: '/test/'},
      { text: '博客', link: 'https://www.wray.top'}
    ],
    sidebar: {
      '/': [
        '/'
      ]
    }
  }
}