<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./Partials/Header.vue";
import Footer from "./Partials/Footer.vue";
export default {
  name: "app",
  components: {
    AppHeader: Header,
    AppFooter: Footer
  }
};
</script>

<style></style>
