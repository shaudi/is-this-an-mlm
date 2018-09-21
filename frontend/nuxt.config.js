module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Is this an MLM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website that tells people whether a company is an MLM Scheme. MLM stands for multi-level-marketing. MLM Schemes extort money from vulnerable people.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Bulma for Vue
  */
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    'nuxt-clipboard2',
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:8080',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  generate: {
    fallback: true,
  }
}

