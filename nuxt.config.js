export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My cool Web Dev blog',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      },
    ],
  },

  loading: {
    color: '#fa923f',
  },
  // For SPA applications only
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#fa923f',
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Resources to add to the global application: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ['~/assets/scss/abtracts/*.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Should hold all env variables that are public as these will
  // be exposed on the frontend and is exposed on both client and
  // server side with $config. Should have default values with ||
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.DB_URL,
      credentials: false,
    },
  },

  // Should hold all env variables that are private and should
  // not be exposed on the frontend and is exposed to only the
  // server side with $config (it overrides publicRuntimeConfig)
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
};
