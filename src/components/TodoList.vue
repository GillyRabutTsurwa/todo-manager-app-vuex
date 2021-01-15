<template>
  <div class="todosList">
    <!-- NOTE: got rid of the markup, put it in its own component (Todo.vue) and using it here as the child component. look at the previous branch for the markup if needed. -->
    <Todo v-for="currentTodo in todos" v-bind:key="currentTodo.id" v-bind:todoObjProp="currentTodo" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  name: "TodoList",
  components: {
    Todo: Todo,
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
  },
  // we call actions using methods.
  // dans ce cas on va pas utiliser d'evenement mais cette methode sera executer dès que ce composant est créée. donc on va creer la methode et l'appeler dans notre hook created
  methods: {
    obtenirTodos() {
      // we call actions using the dispatch() in the store object
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
