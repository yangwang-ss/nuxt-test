export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '网易云官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'iview/dist/styles/iview.css',
    'assets/css/normalize.css',
    {src:'assets/css/common.scss',lang:'less'}
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/iview'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],
 
// asios:{
// baseURL:'',//设置统一的基础url,线上环境关闭代理使用它
// proxy:true,
// prefix:'/api',
// credentials:true //表示跨域请求时是否需要使用凭证
// },
// proxy:{
//   '/api':{
//     target:'https://music.163.com/weapi',
//     pathRewrite:{
//       '^/api':'/',//把api替换成/
//       changeOrigin:true//表示是否跨域
//     }
//   }
// },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    generate:{
      dir:'docs'
    }
  }
}
