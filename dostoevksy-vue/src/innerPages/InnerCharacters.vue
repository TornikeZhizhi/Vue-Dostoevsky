<template>
  <div>
    <div class="container-fluid characters_nd_fluid" v-if="innerData">
      <div class="characters_nd_main_content">
        <div class="characters_nd_main_img">
          <img :src="innerData.image" />

          <h4>{{innerData.title_ka}}</h4>
          <span></span>
        </div>

        <div class="characters_nd_main_text">
          <div v-html="innerData.text_ka"></div>
        </div>
      </div>
    </div>
    <div class="book_nd_fluid" v-if="!innerData">
      <div class="book_nd_main_content error_info">
        <h2>ინფორმაცია ვერ მოიძებნა</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommonPhrazes from "../components/HomeComponents/HomePhases.vue";
export default {
  components: {
    appCommonPhrazes: CommonPhrazes
  },
  data() {
    return {
      innerData: []
    };
  },
  created() {
    var _this = this;
    this.innerData = [];
    axios
      .get(
        "http://datainfo.online/api/ka/characters/" + this.$route.params.id + ""
      )
      .then(response => {
        _this.innerData = response.data.data;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        _this.innerData = false;
      });
  }
};
</script>

<style>
</style>