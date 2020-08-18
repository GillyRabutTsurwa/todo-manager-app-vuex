<template>
  <div @click="$emit('edit')" class="todo">
    <p class="todo__title">{{todoProp.title}}</p>

    <div class="todo__icons">
      <i @click="showModal" class="fas fa-edit todo__icon--edit"></i>
      <i @click="deleteTodo(todoProp.id)" class="fas fa-trash todo__icon--delete"></i>
    </div>

    <!-- Modal funcitonality as success -->
    <!-- <UpdateModal v-if="isModalShowing" v-on:modalClose="fermerModal($event)" /> -->
  </div>

</template>

<script>
// import UpdateModal from "./UpdateTodoModal";
export default {
    // //NEW:
    // data() {
    //     return {
    //         isModalShowing: false
    //     }
    // },
    components: {
        // UpdateModal: UpdateModal
    },
    props: {
        // titleProp: {
        //     type: String,
        //     required: true
        // },
        // idProp: {
        //     type: Number,
        //     required: true
        // }
        // Above code is no longer used, because we are taking in the entire object as a prop, and not the title and the id individually.
        todoProp: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo(id) {
            this.$store.dispatch("deleteTodo", id);
        },
        showModal() {
          this.$emit("modalOpen", true)
        }, 
        // fermerModal(eventData) {
        //     this.isModalShowing = eventData;
        // }
    }
}
</script>

<style>
.todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1.5rem;
  border-radius: 5px;
  text-emphasis: center;
  position: relative;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.todo__title {
  display: inline-block;
  margin: 0.5rem;
}
.todo__icons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.is-complete {
  background-color: #35495e;
  color: #fff;
}
/* .todo__icon--edit {
  
} */
/* .todo__icon--delete {
  
} */
</style>