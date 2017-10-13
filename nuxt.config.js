module.exports = {
  manifest: {
    name: 'تلویزیون اینترنتی امیرکبیر',
    short_name: 'aut-tv',
    dir: 'rtl',
    theme_color: '#232323'
  },

  mode: 'spa',

  loading: {
    color: 'rgba(255, 34, 85, 0.6)'
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
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

  css: [
    '~/assets/css/app.css'
  ],
}
