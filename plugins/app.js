export default async function({ store }) {
  await store.dispatch("FETCH_CHANNELS");
}
