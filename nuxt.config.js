const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: pkg.description },
	    { property:"og:url", content: "https://configurator.abcjs.net"},
	    { property:"og:title", content: "abcjs: Javascript Music Library"},
	    { property:"og:description", content: "abcjs allows web designers and programmers to add sheet music and audio to their websites using the ABC music notation standard and a tiny amount of JavaScript. The music can be animated and can be dynamically created."},
	    { property:"og:image", content: "https://configurator.abcjs.net/abcjs-fb.png"},
	    { property:"og:image:width", content: "2850"},
	    { property:"og:image:height", content: "1470"},

    ],
    link: [
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
        { rel: "manifest", href: "/manifest.json"},
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
	  "font-awesome/css/font-awesome.min.css",
      'abcjs/abcjs-midi.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

    // TODO-PER: This suddenly started crashing. Not sure why.
	// transition: {
	// 	name: 'page',
	// 	mode: 'out-in',
	// 	beforeEnter (el) {
	// 	  this.$store.commit("setRoute", this.$route.name);
	// 	}
	// },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
