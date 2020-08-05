<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos";
export default {
  name: 'App',
  components: {
    Todos: Todos
  },
  computed: {
   
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import url(./App.css);
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
  }
}
</style>
