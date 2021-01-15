<template>
  <div class="todosList">
    <div v-for="currentTodo in todos" v-bind:key="currentTodo.id">
      <p> Task #{{currentTodo.id}} {{currentTodo.title}} </p>
      <p> {{currentTodo.completed}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
  },
  // we call actions using methods.
  // dans ce cas on va pas utiliser d'evenement mais cette methode sera executer dès que ce composant est créée. donc on va creer la methode et l'appeler dans notre hook created
  methods: {
    obtenirTodos() {
      this.$store.dispatch("fetchAllTodos");
    },
  },
  created() {
    const storeInfo = this.$store;
    console.log(storeInfo);
    this.obtenirTodos();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

// dynamic completed class
.is-completed {
  text-decoration: line-through;
}
</style>
