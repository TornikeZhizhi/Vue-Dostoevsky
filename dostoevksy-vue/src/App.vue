<template>
  <div id="app">
    <AppHeader></AppHeader>

    <!-- <transition name="fade"> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- </transition> -->
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

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */
</style>
