<template>
  <div class="todo">
    <p class="todo__title">{{titleProp}}</p>
    <i @click="deleteTodo(idProp)" class="fas fa-trash todo__icon--delete"></i>
  </div>
</template>

<script>
export default {
    props: {
        titleProp: {
            type: String,
            required: true
        },
        idProp: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteTodo(id) {
            console.log(id);
            // deleteTodo above is name we are giving for method to run when we click our icon.
            //deleteTodo before is the name of the action we gave in our store, which calls our mutation, removeTodo
            // Ils sont pas pareils.
            this.$store.dispatch("deleteTodo", id);
        }
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
.todo__icon--delete {
  align-self: flex-end;
}
</style>