<template>
  <div class="body">
    <nav @click="toggle">
      <img src="~/static/icon.png" height="35px" style="margin-top: -10px;" />
      <span>تلویزیون اینترنتی امیرکبیر</span>
    </nav>
    <div class="container">
      <aside :class="{ show: sidebar }" onClickaway="toggle">
        <div class="channel" :class="{ live: channel.src }" v-for="channel in $store.state.channels" :key="channel.slug">
          <router-link :to="`/${channel.slug}`" @click.native="toggle">
            <i :class="`icon-${channel.slug}`"></i>
            <span>{{ channel.title }}</span>
          </router-link>
        </div>
      </aside>
      <main>
        <nuxt/>
        <footer>
        <p>
          <span>مرکز فناوری اطلاعات و ارتباطات، دانشگاه صنعتی امیرکبیر</span>
          <span> - </span>
          <span>طراحی سایت گروه نرم افزاری فندق</span>
        </p>
      </footer>
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
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  height: 56px;
  background: #232323;
  display: flex;
  align-items: center;
  padding: 0 40px;
  justify-content: flex-start;
  box-shadow: 0 2px 1px black;
  z-index: 99999999999;
}

nav img {
  padding-left: 0.5em;
}

.container {
  display: flex;
  flex: 1;
  overflow-x: hidden;
}

aside {
  position: fixed;
  top:56px;
  right: 0;
  width: 240px;
  background: #1c1c1c;
  box-shadow: -1px 0 4px black;
  z-index: 9999;
  overflow-y: scroll;
  height: calc(100vh-56px);
  max-height: calc(100vh-56px);
  padding-right:10px;
}

aside::-webkit-scrollbar {
  width: 0.3rem;
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
    transform: translateX(300px);
    transition: all 0.5s;
  }

  main {
    margin-right: 0 !important;
  }

  aside.show {
    transform: translateX(0);
    display: block;
  }
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 56px 240px 0 0;
}

footer {
  border-top: 1px solid grey;
  color: grey;
  margin-top: 50px;
  font-size: small;
  font-weight: 100;
}

main > div {
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
  data() {
    return {
      sidebar: false
    };
  },
  methods: {
    toggle() {
      this.sidebar = !this.sidebar;
    }
  }
};
</script>