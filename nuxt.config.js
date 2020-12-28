export default {
  ssr: false,
  dev: false,

  build: {
    extractCSS: true,
  },

  manifest: {
    name: "تلویزیون اینترنتی امیرکبیر",
    short_name: "تلویزیون امیرکبیر",
    dir: "rtl",
    theme_color: "#232323",
  },

  loading: false,

  loadingIndicator: {
    name: false,
    color: "grey",
    background: "#131313",
  },

  modules: [["@nuxtjs/pwa", { workbox: false }], "@nuxtjs/axios"],

  plugins: ["~/plugins/app"],

  serverMiddleware: [
    {
      path: "/api/",
      handler: "~/api",
    },
  ],

  css: ["~/assets/css/app.css"],
};
