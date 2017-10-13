<template>
  <div>
    <h1>
      <i :class="`icon-${channel.slug}`"></i>
      {{ channel.title }}
    </h1>

    <div class="player"></div>

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
  height: 480px;
  width: 100%;
}

h1 {
  color: rgba(255, 34, 85, 1);
}
</style>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('FETCH_CHANNEL', params.slug)
  },
  computed: {
    channel () {
      return this.$store.state.channels[this.$route.params.slug]
    }
  }
}
</script>

