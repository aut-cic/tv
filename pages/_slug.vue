<template>
  <div>
    <!-- <p class="alert">
      ⚠️
      <span>
        با توجه به آزمایشی بودن سامانه ممکن است درحال حاضر با اختلالاتی مواجه باشد. از صبر و شکیبایی شما سپاسگذاریم
      </span>
    </p> -->

    <h1>
      <i :class="`icon-${channel.slug}`"></i>
      {{ channel.title }}
    </h1>
    <VideoPlayer v-if="channel.src" class="player" :options="playerOptions" :playsinline="true" />

    <div v-else class="player">
      <span>امکان پخش این کانال  به زودی</span>
    </div>

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
.alert {
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
}

.player {
  background: black;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: rgba(255, 34, 85, 1);
}
</style>

<style>
.player > * {
  width: 100%;
  min-height: 450px;
}
</style>

<script>

export default {
  data() {
    return {
      enter: Date.now()
    };
  },
  beforeDestroy() {
  },
  async fetch({ params, redirect }) {
    if (!params.slug) {
      return redirect("/tv2");
    }
  },
  async mounted() {
    await this.fetch();
  },
  methods: {
    async fetch() {
      await this.$store.dispatch("FETCH_CHANNEL", this.slug);
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    channel() {
      return this.$store.state.channels[this.slug];
    },
    info() {
      return this.$store.state.info[this.slug];
    },
    playerOptions() {
      return {
        fluid: true,
        muted: false,
        autoplay: false,
        controls: true,

        language: "fa",

        html5: {
          vhs: {
            withCredentials: false,
            overrideNative: true
          },
          nativeAudioTracks: false,
          nativeVideoTracks: false
        },

        poster: require("assets/images/channel/" + this.slug + ".jpg"),

        sources: [
          {
            type: "application/x-mpegURL",
            src: `http://tv2.aut.ac.ir/live/${this.channel.src}/stream.m3u8`
          }
        ]
      };
    }
  }
};
</script>
