import "video.js/dist/video-js.css";

export default async function({ store }) {
  await store.dispatch("FETCH_CHANNELS");
}
