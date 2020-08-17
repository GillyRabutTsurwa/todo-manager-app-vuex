<template>
  <div class="todos">
    <CurrentTodo v-bind:titleProp="currentTodo.title" v-bind:idProp="currentTodo.id" v-for="(currentTodo, index) in allTodos" v-bind:key="index" />
  </div>
</template>

<script>
import CurrentTodo from "./CurrentTodo";
export default {
    name: "Todos",
    components: {
        CurrentTodo: CurrentTodo
    },
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
.todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 3rem;
}

/* J'ai deplacé ce code à CurrentTodo.vue (l'enfant), aussi que la classe todo */
/* .todos .todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-emphasis: center;
  position: relative;
  cursor: pointer;
  font-size: 1.6rem;
} */
</style>