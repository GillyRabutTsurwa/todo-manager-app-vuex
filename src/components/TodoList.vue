<template>
  <div class="todosList">
    <div v-for="currentTodo in todos" v-bind:key="currentTodo.id" v-bind:class="{'is-completed': currentTodo.completed}">
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
  created() {
    const storeInfo = this.$store;
    console.log(storeInfo);
    console.log(this.todos);
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
