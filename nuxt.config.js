module.exports = {
  mode: 'spa',

  build: {
    extractCSS: true
  },

  manifest: {
    name: 'تلویزیون اینترنتی امیرکبیر',
    short_name: 'تلویزیون امیرکبیر',
    dir: 'rtl',
    theme_color: '#232323'
  },

  loading: false,

  loadingIndicator: {
    name: false,
    color: 'grey',
    background: '#131313'
  },

  modules: [
    ['@nuxtjs/pwa', { workbox: false }],
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics'
  ],

  'google-analytics': {
    id: 'UA-108642664-1',
    autoTracking: {
      exception: true
    }
  },

  plugins: [
    '~/plugins/app'
  ],

  serverMiddleware: [
    {
      path: '/api/',
      handler: '~/api'
    }
  ],

  css: [
    '~/assets/css/app.css'
  ],
}
