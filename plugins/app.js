import Vue from "vue";
import VueVideoPlayer from "vue-video-player";

import "video.js/dist/video-js.css";
import "video.js/dist/lang/fa";

import "@videojs/http-streaming";

Vue.use(VueVideoPlayer);

export default async function({ store }) {
  await store.dispatch("FETCH_CHANNELS");
}
