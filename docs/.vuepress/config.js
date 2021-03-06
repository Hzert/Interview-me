module.exports = {
  title: '前端文档',
  description: '一些前端的知识收集文档',
  head: [
    ['link', {rel: 'icon', href: '/logo.ico'}]
  ],
  base: '/Interview-me/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'},
      { text: '前端', items: [
        { text: 'HTML', link: '/web/html/'},
        { text: 'CSS', link: '/web/css/'},
        { text: 'Javascript', link: '/web/javascript/'},
      ]},
      { text: '面试问题',  items: [
        { text: 'HTML&&CSS', link: '/interview/htmlCss/'},
        { text: 'Javascript', link: '/interview/javascript/'},
      ]},
      { text: '学习', items: [
        { text: 'Javascript', link: '/Learn/javascript/'},
        { text: 'Vue', link: '/Learn/Vue/'},
        { text: 'React', link: '/Learn/React/'},
      ]},
      { text: '随笔笔记', link: '/note/'},
      { text: '博客', link: 'https://www.wray.top'}
    ],
    sidebar: 'auto'
  }
}