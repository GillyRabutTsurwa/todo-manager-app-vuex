<template>
  <div class="about">
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    TodoList: TodoList,
  },
};
</script>
