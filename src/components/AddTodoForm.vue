<template>
  <div class="form-container">
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" placeholder="AddTodo" id="">
      <div>{{title}}</div>
      <input type="submit" value="Submit">
    </form>
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
    methods: {
        addTodo() {
            if (this.title !== "") {
                this.$store.dispatch("createTodo", this.title)
            }
        }
    }
}
</script>

<style>
</style>