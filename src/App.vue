<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Default from "@/views/Default.vue";

export default {
  components: {
    Default,
  },
  data() {
    return {}
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

nav {


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
