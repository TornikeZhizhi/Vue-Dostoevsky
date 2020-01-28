<template>
  <div>
    <div class="book_nd_fluid" v-if="innerData">
      <div class="book_nd_main_content">
        <!-- background bottom -->
        <div class="book_nd_main_content_bottom_bg">
          <img src="../assets/images/ormanents1.png" />
        </div>
        <!-- background bottom -->

        <!-- // background-image -->
        <div class="book_nd_main_content_bg"></div>

        <!-- // background-image -->

        <div class="book_nd_tittle">
          <div class="book_nd_img" id="bok">
            <img :src="innerData.image" />
          </div>
          <h2>{{innerData.title_ka}}</h2>
        </div>

        <div class="book_nd_main_text">
          <p>{{innerData.text_ka}}</p>
        </div>
      </div>
    </div>

    <div class="book_nd_fluid" v-if="!innerData">
      <div class="book_nd_main_content error_info">
        <h2>ინფორმაცია ვერ მოიძებნა</h2>
      </div>
    </div>
    <appCommonPhrazes :PhrazhesData="innerData.phrase_ka"></appCommonPhrazes>
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
    axios
      .get("http://datainfo.online/api/ka/books/" + this.$route.params.id + "")
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