<template>
  <div
    class="container-fluid reviews_fluid reviews_sv text-center page-section"
  >
    <div class="reviews_home_tittle">
      <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <router-link tag="a" to="/reviews">რეცენზიები</router-link>
      </h2>
    </div>
    <div
      class="container review_cont container_shrink"
      data-wow-offset="300"
      style="visibility: visible; animation-name: fadeIn;"
    >
      <div class="row">
        <div
          class="col-lg-6 col-md-12 hover13"
          v-for="data in homeReviewsData"
          :key="data.id"
        >
          <div
            class="reviews_box scoll_review_left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div class="review_readmore">
              <a
                :href="'/reviews/' + data.title_ka"
                class="btn-6"
                @click.prevent="commonRouterHandler(data.title_ka)"
              >
                <span class="btn-62">გაიგეთ მეტი</span>
              </a>
            </div>
            <div class="d-flex flex-column">
              <div class="reviews_img">
                <a href @click.prevent="commonRouterHandler(data.title_ka)">
                  <img :src="data.image" />
                </a>
              </div>
              <a
                :href="'/reviews/' + data.title_ka"
                @click.prevent="commonRouterHandler(data.title_ka)"
              >
                <i class="fas fa-users"></i>
                {{ data.title_ka }}
              </a>
            </div>

            <div>
              <div class="review_text" v-html="data.text_ka">
                <!-- | StringFilter -->
              </div>
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
      title: null,
      homeReviewsData: []
    };
  },
  methods: {
    commonRouterHandler(arg) {
      this.$router.push({
        path: "/reviews/" + arg + ""
      });
    }
  },
  filters: {
    StringFilter(value) {
      return value.slice(0, 570) + "...";
    }
  },
  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[4];
    }, 1000);
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/home_reviews")
      .then(response => {
        _this.homeReviewsData = response.data.data;
        _this.homeReviewsData.map((el, index) => {
          var shrinkText = el.text_ka.slice(0, 570) + "...";
          el.text_ka = shrinkText;
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
