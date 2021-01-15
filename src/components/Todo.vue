<template>
  <div>
    <h5> Task #{{todo.id}}</h5>
    <h3>{{todo.title}}</h3>
    <p> {{todo.completed}} </p>
  </div>
</template>

<script>
export default {
  props: {
    todoObjProp: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      todo: this.todoObjProp,
    };
  },
  created() {
    console.log(this.todo);
  },
};
</script>

<style>
</style>