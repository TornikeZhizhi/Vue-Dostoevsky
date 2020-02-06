<template>
  <div class="container-fluid reviews_nd_fluid">
    <div class="review_tittle text-center">
      <h2>{{ title }}</h2>
    </div>

    <div class="container review_cont">
      <div class="row">
        <div
          class="col-lg-6 col-md-12 hover13"
          v-for="data in ReviewsData"
          :key="data.id"
        >
          <div class="reviews_box scoll_review_left">
            <div class="review_readmore">
              <router-link
                class="btn-6"
                tag="a"
                :to="{
                  path: '/reviews/' + data.title_ka + ''
                }"
              >
                <span class="btn-62">გაიგეთ მეტი</span>
              </router-link>
              <!-- <a href="review/ვლადიმერ_სოლოვიოვი" class="btn-6">
               
              </a>-->
            </div>
            <div class="d-flex flex-column">
              <div class="reviews_img">
                <router-link
                  tag="a"
                  :to="{
                    path: '/reviews/' + data.title_ka + ''
                  }"
                >
                  <img :src="data.image" alt="" />
                </router-link>
              </div>
              <a href>
                <i class="fas fa-users"></i>
                {{ data.title_ka }}
              </a>
            </div>

            <div class="review_text">
              <p>{{ data.text_ka }}</p>
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
      ReviewsData: null,
      BottomPhrazhes: null,
      title: null
    };
  },
  created() {

    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[4];
    }, 1000);

    axios
      .get("http://datainfo.online/api/ka/reviews")
      .then(response => {
        this.ReviewsData = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://datainfo.online/api/ka/reviews_phrases")
      .then(response => {
        if (response.statusText == "OK") {
          this.BottomPhrazhes = response.data.data[0];
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
