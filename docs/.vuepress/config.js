module.exports = {
    title: '前端文档',
    description: '一些前端的知识收集文档',
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }]
    ],
    base: '/Interview-me/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '前端', items: [
                    { text: 'HTML', link: '/web/html/' },
                    { text: 'CSS', link: '/web/css/' },
                    { text: 'Javascript', link: '/web/javascript/' },
                ]
            },
            {
                text: '面试问题', items: [
                    { text: 'HTML&&CSS', link: '/interview/htmlCss/' },
                    { text: 'Javascript', link: '/interview/javascript/' },
                ]
            },
            {
                text: '学习', items: [
                    { text: 'Javascript', link: '/Learn/javascript/' },
                    { text: 'Vue', link: '/Learn/Vue/' },
                    { text: 'React', link: '/Learn/React/' },
                ]
            },
            { text: '随笔笔记', link: '/note/' },
            { text: '博客', link: 'https://www.wray.top' }
        ],
        sidebar: 'auto',
        category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
        },
        tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
        },
        socialLinks: [     // 信息栏展示社交信息
            { icon: 'reco-github', link: 'https://github.com/recoluan' },
            { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
        ]
    },
    theme: 'reco'
}