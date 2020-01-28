<template>
  <div class="container-fluid characters_fluid" v-if="CharachtersData">
    <div class="review_tittle text-center">
      <h2>{{title}}</h2>
    </div>

    <div class="container review_cont">
      <div class="row">
        <div class="col-lg-6 col-md-12 hover13" v-for="data in CharachtersData" :key="data.id">
          <div class="reviews_box scoll_review_left">
            <div class="review_readmore">
              <router-link
                class="btn-6"
                tag="a"
                :to="{
                path: '/characters/'+ data.title_ka+'',
              
          }"
              >
                <span class="btn-62">გაიგეთ მეტი</span>
              </router-link>
            </div>
            <div class="d-flex flex-column">
              <div class="reviews_img">
                <a href="character/როგოჟინი">
                  <img src="../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg" />
                </a>
              </div>
              <a href="character/როგოჟინი">
                <i class="fas fa-users"></i>
                {{data.title_ka}}
              </a>
            </div>

            <div class="review_text">
              <p>{{data.text_ka}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appCommonPhrazes :PhrazhesData="BottomPhrazhes"></appCommonPhrazes>
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
      CharachtersData: null,
      title: this.$store.state.pagesTitles[1],
      BottomPhrazhes: null
    };
  },

  created() {
    axios
      .get("http://datainfo.online/api/ka/characters")
      .then(response => {
        if (response.statusText == "OK") {
          this.CharachtersData = response.data.data;
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://datainfo.online/api/ka/characters_phrases")
      .then(response => {
        if (response.statusText == "OK") {
          this.BottomPhrazhes = response.data.data[0];
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log(this.CharachtersData);
  }
};
</script>

<style>
</style>