var path = require('path');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.scss'
  ],
  /*
  ** Environement variables
  */
  env: {
    CTF_SPACE_ID: 'y02g29aioh2y',
    CTF_CDA_ACCESS_TOKEN: '7YKQKqHsIlseetCVE-wmWbZxh7megRf1n8llzwWFTiY'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/navigator.js',
    '~/plugins/vue-async-computed.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production'),
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {},
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    purgeCSS: {
      mode: 'postcss'
    }
  }
}
