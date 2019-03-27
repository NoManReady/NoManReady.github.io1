module.exports = {
  title: 'NoManReady',
  description: 'Enjoy Vue',
  host: '127.0.0.1',
  port: '9999',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['script', { src: `/plugin.js`, defer: `defer` }]
  ],
  themeConfig: {
    sidebarDepth: 1,
    sidebar: {
      '/ow/': ['eweb', 'lua'],
      '/javascript/': ['pluginmode', 'mobile', 'axios', 'image', 'timeselected','utils'],
      '/mockjs/': ['mockjs', 'demo'],
      '/vue/': ['config']
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '文章',
        items: [
          { text: 'Ow', link: '/ow/' },
          { text: 'Javascript', link: '/javascript/' },
          { text: 'Mockjs', link: '/mockjs/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
      { text: '开源库', link: '/gist/' }
    ],
    repo: 'NoManReady/NoManReady.github.io',
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: true
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {

    }
  }
}
