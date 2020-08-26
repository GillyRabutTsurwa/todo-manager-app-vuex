<template>
  <div id="app">
    <div class="top">
      <i class="devicon-vuejs-plain logo"></i>
      <h1 class="app__title">Todo Manager App</h1>
      <h2>Toggle to go here</h2>
    </div>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodoForm";
import Todos from "./components/Todos";
export default {
  name: 'App',
  components: {
    AddTodo: AddTodo,
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
  // color: #2c3e50;
  color: #e8ffe5;

  .top {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 2rem;
  }

  .logo {
    font-size: 5rem;
    animation-name: logoSpin;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-timing-function: linear;
    perspective: 160rem;
  }

  // img {
  //   width: 2rem;
  //   height: 2rem;

  //   &:hover {
  //     transform: rotateY(180deg);
  //   }
  // }
}

// animations
@keyframes logoSpin {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
