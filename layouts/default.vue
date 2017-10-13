<template>
  <div>
    <nav @click="toggle">
      <img src="~/assets/images/mic.gif" height="20px" />
      <span>تلویزیون اینترنتی امیرکبیر</span>
    </nav>
    <div class="container">
      <aside :class="{ show: sidebar }">
        <div class="channel" v-for="channel in $store.state.channels" :key="channel.slug">
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
  overflow-x: hidden;
}

aside {
  width: 240px;
  padding: 20px;
  background: #1c1c1c;
  /* max-height: calc(100vh-56px); */
  box-shadow: -1px 0 4px black;
}

@media screen and (max-width: 1050px) {
  aside {
    position: absolute;
    right: 0;
    display: none;
    transition: all 1s;
  }

  aside.show {
    display: block;
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