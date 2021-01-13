<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StoreTest />
  </div>
</template>

<script>
// @ is an alias to /src
import StoreTest from "@/components/StoreTest.vue";

export default {
  name: "Home",
  components: {
    StoreTest: StoreTest,
  },
};
</script>
