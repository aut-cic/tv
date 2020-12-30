import Vue from "vue";

import "video.js/dist/video-js.css";
import "video.js/dist/lang/fa";

import "@videojs/http-streaming";

if (process.browser) {
  const VueVideoPlayer = require("vue-video-player/dist/ssr");
  Vue.use(VueVideoPlayer);
}

export default async function({ store }) {
  await store.dispatch("FETCH_CHANNELS");
}
