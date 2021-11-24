<template>
  <div id="app">
    <info></info>
  </div>
</template>

<script>
import info from "./views/info.vue";
export default {
  name: "app",
  components: { info },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  margin: auto;
}
</style>
