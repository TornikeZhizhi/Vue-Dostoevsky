<template>
  <div class="container-fluid reviews_nd_fluid">
    <div class="review_tittle text-center">
      <h2>რეცენზიები</h2>
    </div>

    <div class="container review_cont">
      <div class="row">
        <div class="col-lg-6 col-md-12 hover13" v-for="data in ReviewsData" :key="data.id">
          <div class="reviews_box scoll_review_left">
            <div class="review_readmore">
              <a href="review/ვლადიმერ_სოლოვიოვი" class="btn-6">
                <span class="btn-62">გაიგეთ მეტი</span>
              </a>
            </div>
            <div class="d-flex flex-column">
              <div class="reviews_img">
                <a href="review/ვლადიმერ_სოლოვიოვი">
                  <img src="../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg" />
                </a>
              </div>
              <a href="review/ვლადიმერ_სოლოვიოვი">
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ReviewsData: null
    };
  },
  created() {
    axios
      .get("http://datainfo.online/api/ka/reviews")
      .then(response => {
        this.ReviewsData = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>