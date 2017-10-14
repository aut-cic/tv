<template>
  <div>
    <h1>
      <i :class="`icon-${channel.slug}`"></i>
      {{ channel.title }}
    </h1>

    <video-player class="player" :options="playerOptions" :playsinline="true" />

    <div>
      <h4>{{ channel.info.title }}</h4>

      <p>
        <span>مدت زمان: </span>
        <span>{{ channel.info.duration || 'نامشخص' }}</span>
      </p>

      <p v-html="channel.info.summary"></p>

      <hr>

    </div>
  </div>
</template>

<style scoped>
.player {
  background: black;
  width: 100%;
}

.video-player-box {
  width: 100%;
  height: 100%;
}

h1 {
  color: rgba(255, 34, 85, 1);
}
</style>

<script>
export default {
  async fetch ({ store, params, redirect }) {
    if (!params.slug) {
      return redirect('/tv1')
    }

    await store.dispatch('FETCH_CHANNEL', params.slug)
  },
  computed: {
    slug () {
      return this.$route.params.slug
    },
    channel () {
      return this.$store.state.channels[this.slug]
    },
    playerOptions () {
      return {
        fluid: true,
        muted: true,
        language: 'fa',

        poster: require("assets/images/channel/" + this.slug + ".jpg"),
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],

      }
    }
  }
}
</script>

