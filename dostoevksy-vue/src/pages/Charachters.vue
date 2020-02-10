<template>
  <div>
    <div class="container-fluid characters_fluid" v-if="CharachtersData">
      <div class="review_tittle text-center">
        <h2>{{ title }}</h2>
      </div>

      <div class="container review_cont">
        <div class="row">
          <div class="col-lg-6 col-md-12 hover13" v-for="data in CharachtersData" :key="data.id">
            <div class="reviews_box scoll_review_left">
              <div class="review_readmore">
                <a class="btn-6" href @click="commonRouterHandler(data.title_ka)">
                  <span class="btn-62">გაიგეთ მეტი</span>
                </a>
              </div>
              <div class="d-flex flex-column">
                <div class="reviews_img">
                  <a href @click="commonRouterHandler(data.title_ka)">
                    <img src="../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg" />
                  </a>
                </div>
                <a href @click="commonRouterHandler(data.title_ka)">
                  <i class="fas fa-users"></i>
                  {{ data.title_ka }}
                </a>
              </div>

              <div>
                <div class="review_text" v-html="data.text_ka"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <appCommonPhrazes v-if="BottomPhrazhes" :PhrazhesData="BottomPhrazhes.title_ka"></appCommonPhrazes>
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
      title: null,
      BottomPhrazhes: null
    };
  },
  methods: {
    commonRouterHandler(arg) {
      this.$router.push({
        path: "/characters/" + arg + ""
      });
    }
  },

  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[1];
    }, 1000);
    axios
      .get("http://datainfo.online/api/ka/characters")
      .then(response => {
        if (response.statusText == "OK") {
          _this.CharachtersData = response.data.data;
          _this.CharachtersData.map((el, index) => {
            var shrinkText = el.text_ka.slice(0, 570) + "...";
            el.text_ka = shrinkText;
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    var _this = this;
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
