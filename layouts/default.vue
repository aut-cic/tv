<template>
  <div class="body">
    <nav @click="toggle">
      <img src="~/assets/images/mic.gif" height="20px" />
      <span>تلویزیون اینترنتی امیرکبیر</span>
    </nav>
    <div class="container">
      <aside :class="{ show: sidebar }">
        <div class="channel" :class="{ live: channel.src }" v-for="channel in $store.state.channels" :key="channel.slug">
          <router-link :to="`/${channel.slug}`" @click.native="toggle">
            <i :class="`icon-${channel.slug}`"></i>
            <span>{{ channel.title }}</span>
          </router-link>
        </div>
      </aside>
      <main>
        <nuxt/>
      </main>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
}

nav {
  height: 56px;
  background: #232323;
  display: flex;
  align-items: center;
  padding: 0 40px;
  justify-content: flex-start;
  box-shadow: 0 2px 1px black;
}

nav img {
  padding-left: .5em;
}

.container {
  display: flex;
  flex: 1;
  overflow-x: hidden;
}

aside {
  width: 240px;
  padding: 0 20px;
  background: #1c1c1c;
  box-shadow: -1px 0 4px black;
  z-index: 9999;
  overflow-y: scroll;
  height: calc(100vh-56px);
  max-height: calc(100vh-56px);
}

aside::-webkit-scrollbar {
    width: .3rem;
}
 
aside::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
}

aside::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

@media screen and (max-width: 1050px) {
  aside {
    position: absolute;
    transform: translateX(300px);
    transition: all .5s;
  }

  aside.show {
    transform: translateX(0);
    display: block;
    right: 0;
  }
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main>div {
  width: 800px;
  max-width: 90vw;
}

.channel {
  display: flex;
  height: 50px;
  cursor: pointer;
}

.channel.live i {
  color: green;
}

.channel i {
  font-size: 28px;
  margin-left: 25px;
}

.channel img {
  width: 168px;
}
</style>

<script>
export default {
  data () {
    return {
      sidebar: false
    }
  },
  methods: {
    toggle () {
      this.sidebar = !this.sidebar
    }
  }
}
</script>