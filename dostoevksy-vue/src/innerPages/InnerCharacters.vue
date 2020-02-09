<template>
  <div>
    <div class="container-fluid characters_nd_fluid" v-if="innerData">
      <div class="characters_nd_main_content">
        <div class="characters_nd_main_img">
          <img :src="innerData.image" />

          <h4>{{ innerData.title_ka }}</h4>
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
    <appCommonPhrazes
      v-if="BottomPhrazhes"
      :PhrazhesData="BottomPhrazhes.title_ka"
    ></appCommonPhrazes>
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
      innerData: [],
      BottomPhrazhes: null
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
      })
      .catch(function(error) {
        console.log(error);
        _this.innerData = false;
      });
    axios
      .get("http://datainfo.online/api/ka/characters_phrases")
      .then(response => {
        if (response.statusText == "OK") {
          _this.BottomPhrazhes = response.data.data[0];
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
