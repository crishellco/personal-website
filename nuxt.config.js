export default {
  ssr: false,

  components: true,

  target: 'static',

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .only(['path'])
        .fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Chris Mitchell',
    titleTemplate: '%s - Chris Mitchell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/date-fns'

    // '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FB_API_KEY,
          authDomain: 'crishellco-personal-website.firebaseapp.com',
          databaseURL: 'https://crishellco-personal-website.firebaseio.com',
          projectId: 'crishellco-personal-website',
          storageBucket: 'crishellco-personal-website.appspot.com',
          messagingSenderId: '235801148140',
          appId: '1:235801148140:web:cc05e55b9d1fbd4e6ac3c9',
          measurementId: 'G-43B3GECECK'
        },
        services: {
          firestore: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
