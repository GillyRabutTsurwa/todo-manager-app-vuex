<template>
  <div id="app">
    <div class="top">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1 class="app__title">Todo Manager App</h1>
      <h2>Toggle to go here</h2>
    </div>
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

  .top {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 2rem;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
