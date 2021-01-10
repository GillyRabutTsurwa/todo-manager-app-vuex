<template>
  <div class="testing-123">
    <div v-for="currentData in myStoreData" v-bind:key="currentData.id">
      <h4>{{currentData.name}}</h4>
      <p>{{currentData.msg}}</p>
      <p>{{currentData.success}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreTest",
  computed: {
    myStoreData() {
      return this.$store.getters.myData;
    },
  },
  created() {
    console.log(this.myStoreData);
    const storeInfo = this.$store;
    console.log(storeInfo);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
