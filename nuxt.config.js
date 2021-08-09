const TITLE =
  'Virginie Dang | Massothérapeute | Détente et thérapeutique | Montréal'
const DESCRIPTION =
  'Massothérapie et bien-être à Montréal, quartier Petite-Patrie. Prise de rendez-vous pour un massage professionnel de détente ou thérapeutique. Votre mieux-être, ma priorité.'
const LANG = 'fr'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: LANG,
    },
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION,
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#4d8591' },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-698X13KBMJ',
        async: true,
      },
      { src: 'js/gtag.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://google-fonts.nuxtjs.org/
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lora: {
            wght: [400, 500, 600, 700],
            ital: [400, 500, 600, 700],
          },
          Parisienne: true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      name: TITLE,
      short_name: TITLE,
      description: DESCRIPTION,
      lang: LANG,
    },
    meta: {
      name: TITLE,
      description: DESCRIPTION,
      lang: LANG,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          'custom-color-pink': '#f8e5e5',
          'custom-color-green': '#4d8591',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
