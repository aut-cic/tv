<template>
  <div>
    <h1>
      <i :class="`icon-${channel.slug}`"></i>
      {{ channel.title }}
    </h1>

    <video-player v-if="channel.src" class="player" :options="playerOptions" :playsinline="true" />

    <!-- <div v-else class="player">
      <span>امکان پخش این کانال  به زودی</span>
    </div> -->

    <div v-if="info">
      <h4>{{ info.title }}</h4>
      <hr>
      <p>
        <span>مدت زمان: </span>
        <span>{{ info.duration || 'نامشخص' }}</span>
      </p>

      <p v-html="info.summary"></p>
    </div>
    <div v-else>
      <span>لطفا شکیبا باشید ...</span>
    </div>
  </div>
</template>

<style scoped>
.player {
  background: black;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  async fetch ({ params, redirect }) {
    if (!params.slug) {
      return redirect('/tv1')
    }
  },
  async mounted () {
    await this.fetch()
  },
  methods: {
    async fetch () {
      await this.$store.dispatch('FETCH_CHANNEL', this.slug)
    }
  },
  computed: {
    slug () {
      return this.$route.params.slug
    },
    channel () {
      return this.$store.state.channels[this.slug]
    },
    info () {
      return this.$store.state.info[this.slug]
    },
    playerOptions () {
      return {
        fluid: true,
        muted: true,
        language: 'fa',

        html5: {
          hlsjsCOnfig: {
            withCredentials: false,
            debug: true,
          }
        },

        poster: require('assets/images/channel/' + this.slug + '.jpg'),
        sources: [{
          type: 'application/x-mpegURL',
          src: `http://tv.aut.ac.ir/live/irib/${this.channel.src}/stream.m3u8`,
        }],

      }
    }
  }
}
</script>

