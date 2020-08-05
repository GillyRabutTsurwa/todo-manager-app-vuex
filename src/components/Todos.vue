<template>
  <div class="todos">
    <div v-for="(currentTodo, index) in allTodos" v-bind:key="index" class="todo">
      <p>{{currentTodo.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Todos",
    computed: {
        allTodos() {
            return this.$store.getters.allTodos;
        }
    },
    methods: {

    },
    created() {
        console.log(this.$store);
        this.$store.dispatch("fetchTodos");
    }
}
</script>

<style>
</style>