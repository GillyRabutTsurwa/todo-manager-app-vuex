//NEW:
<template>
  <div @click.self="closeModal" class="modal">
    <div class="modal__content">
      <h5>Modal Content</h5>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <input type="submit" value="Submit">
      </form>
      <!-- <span>{{title}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: ""
        }
    },
    //NEW: 
    computed: {
        // allTodos() {
        //     return this.$store.getters.allTodos;
        // }
    },
    methods: {
        closeModal() {
            this.$emit("modalClose", false);
        },
        onSubmit() {
          if (this.title !== "") {
            this.$emit("editTitle", this.title);
          }
        }
    },
    created() {
        // this.$store.dispatch("fetchTodos");
    }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* put it on top of all */
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__content {
  width: 50rem;
  height: 30rem;
  background-color: bisque;
}
</style>