import Vue from "vue";

if (process.browser) {
  const VueVideoPlayer = require("vue-video-player/dist/ssr");

  require("video.js/dist/video-js.css");
  require("video.js/dist/lang/fa");

  require("@videojs/http-streaming");

  Vue.use(VueVideoPlayer);
}

export default async function({ store }) {
  await store.dispatch("FETCH_CHANNELS");
}
