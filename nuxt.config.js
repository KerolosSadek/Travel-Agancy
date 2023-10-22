
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Travel-Booking',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/css/language.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './node_modules/bootstrap/dist/js/bootstrap.js',
      ssr: false
    },
    {
      src: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      ssr: false
    },
    {
      src: './plugins/notifications-client.js',
      ssr: false,
    },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      { code: 'EN', name: 'English', file: 'en.js' },
      { code: 'AR', name: 'العربية', file: 'ar.js' },
    ],
    defaultLocale: 'AR',
    langDir: 'locales/',
    detectBrowserLanguage: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: 'localhost',
    port: 3000,
  },
}
