<template>
  <div>
    <appHomeTop></appHomeTop>
    <appHomeBook></appHomeBook>
    <appHomePhrazes
      v-if="HomePhrazesData"
      :PhrazhesData="HomePhrazesData[0].title_ka"
    ></appHomePhrazes>
    <appHomeBiography></appHomeBiography>
    <appHomePhrazes
      v-if="HomePhrazesData"
      :PhrazhesData="HomePhrazesData[1].title_ka"
    ></appHomePhrazes>
    <appHomeCharachters></appHomeCharachters>
    <appHomePhrazes
      v-if="HomePhrazesData"
      :PhrazhesData="HomePhrazesData[2].title_ka"
    ></appHomePhrazes>
  </div>
</template>

<script>
import axios from "axios";
import HomeTop from "../components/HomeComponents/HomeTop.vue";
import HomeBook from "../components/HomeComponents/HomeBooks.vue";
import HomePhrazes from "../components/HomeComponents/HomePhases.vue";
import HomeBiography from "../components/HomeComponents/HomeBiography.vue";
import HomeCharachters from "../components/HomeComponents/HomeCharackters.vue";
export default {
  data() {
    return {
      HomePhrazesData: null
    };
  },
  components: {
    appHomeTop: HomeTop,
    appHomeBook: HomeBook,
    appHomePhrazes: HomePhrazes,
    appHomeBiography: HomeBiography,
    appHomeCharachters: HomeCharachters
  },
  created() {
    axios
      .get("http://datainfo.online/api/ka/home_phrases")
      .then(response => {
        this.HomePhrazesData = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
