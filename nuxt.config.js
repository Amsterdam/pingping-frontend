export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  server: {
    // port: 80
  },

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "Ping Ping %s",
    htmlAttrs: {
      lang: "nl"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Met Ping Ping bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) zaken te regelen en je basis op orde te brengen. Zo weet je precies wanneer en wat je moet regelen bij verschillende life events, zoals 18 worden, werken, studeren en op jezelf gaan wonen."
      },
      {
        property: "og:title",
        content: `Ping Ping`
      },
      {
        property: "og:description",
        content: "Met Ping Ping bieden we je een persoonlijke routeplanner om op een leuke en makkelijke manier je (financiële) zaken te regelen en je basis op orde te brengen. Zo weet je precies wanneer en wat je moet regelen bij verschillende life events, zoals 18 worden, werken, studeren en op jezelf gaan wonen."
      },
      {
        property: "og:image",
        content: `static/apple-touch-icon.png`
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/custom.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    ['nuxt-matomo', { matomoUrl: '//analytics.data.amsterdam.nl/', siteId: 30 }]
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  styleResources: {
    // scss: ["~assets/style.scss"]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
