<template>
  <div class="todos">
    <!-- Instead of passing a title prop and an id prop separately, I will pass the entire object and deal with it accordingly in child component, so below -->
    <!-- <CurrentTodo v-bind:titleProp="currentTodo.title" v-bind:idProp="currentTodo.id" v-for="(currentTodo, index) in allTodos" v-bind:key="index" /> -->
    <!-- will become -->
    <CurrentTodo v-on:edit="updateOnDblClick(currentTodo)" v-on:modalOpen="ouvrirModal($event)" v-for="(currentTodo, index) in allTodos" v-bind:key="index" v-bind:todoProp="currentTodo" v-bind:class="{'is-complete': currentTodo.completed}" />

    <UpdateModal v-if="isModalShowing" v-on:modalClose="fermerModal($event)" v-on:editTitle="titleUpdate($event)" />

  </div>
</template>

<script>
import CurrentTodo from "./CurrentTodo";
import UpdateModal from "./UpdateTodoModal";
export default {
    name: "Todos",
    //NEW:
    data() {
        return {
            isModalShowing: false,
            updatedTitle: ""
        }
    },
    components: {
        CurrentTodo: CurrentTodo,
        UpdateModal: UpdateModal
    },
    computed: {
        allTodos() {
            return this.$store.getters.allTodos;
        }
    },
    methods: {
      test() {
        console.log(123)
      },
      ouvrirModal(eventData) {
            this.isModalShowing = eventData;
      },
      fermerModal(eventData) {
            this.isModalShowing = eventData;
      },
      titleUpdate(eventData) {
        // console.log(eventData);
        // return eventData;
        if (eventData !== "") {
          this.updatedTitle = eventData;
        }
        this.isModalShowing = false;
      },
      updateOnDblClick(todoObj) {
        const updatedTodo = {
          id: todoObj.id,
          // title: todoObj.title,
          title: this.updatedTitle,
          completed: !todoObj.completed
        }; 

        if (updatedTodo.title !== "") {
          this.$store.dispatch("updateTodo", updatedTodo);
        }
        console.log(updatedTodo);
      },
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