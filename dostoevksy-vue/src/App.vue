<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Partials/Header.vue";
export default {
  name: "app",
  components: {
    AppHeader: Header
  }
};
</script>

<style></style>
