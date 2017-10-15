module.exports = {
  mode: 'spa',

  build: {
    extractCSS: true
  },

  manifest: {
    name: 'تلویزیون اینترنتی امیرکبیر',
    short_name: 'aut-tv',
    dir: 'rtl',
    theme_color: '#232323'
  },

  loading: {
    color: 'rgba(255, 34, 85, 0.6)'
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: 'grey',
    background: '#131313'
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    ['@nuxtjs/proxy', {
      pathRewrite: {
        '^/play': '/'
      }
    }]
  ],

  plugins: [
    '~/plugins/app'
  ],

  serverMiddleware: [
    {
      path: '/api/',
      handler: '~/api'
    }
  ],

  proxy: {
    '/play': 'http://172.16.4.136:4022',
  },

  css: [
    '~/assets/css/app.css'
  ],
}
