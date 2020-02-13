<template>
  <div>
    <div
      v-if="ReviewsData"
      class="container-fluid reviews_nd_fluid common_fade"
    >
      <div class="review_tittle text-center">
        <h2>რეცენზიები</h2>
      </div>

      <div class="container review_cont">
        <div class="row">
          <div
            class="col-lg-6 col-md-12 hover13"
            v-for="data in ReviewsData"
            :key="data.id"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div class="reviews_box scoll_review_left">
              <div class="review_readmore">
                <a
                  class="btn-6"
                  :href="'/reviews/' + data.title_ka"
                  @click="commonRouterHandler(data.title_ka)"
                >
                  <span class="btn-62">გაიგეთ მეტი</span>
                </a>
              </div>
              <div class="d-flex flex-column">
                <div class="reviews_img">
                  <a
                    :href="'/reviews/' + data.title_ka"
                    @click.prevent="commonRouterHandler(data.title_ka)"
                  >
                    <img :src="data.image" alt />
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

              <div class="review_text">
                <div v-html="data.text_ka"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!ReviewsData">
      <div class="bookshelf_wrapper">
        <ul class="books_list">
          <li class="book_item first">
            <span>Tolstoy</span>
          </li>
          <li class="book_item second">
            <span>Hesse</span>
          </li>
          <li class="book_item third">
            <span>Kafka</span>
          </li>
          <li class="book_item fourth">
            <span>Shakespeare</span>
          </li>
          <li class="book_item fifth">
            <span>Faulkner</span>
          </li>
          <li class="book_item sixth">
            <span>Dostoevsky</span>
          </li>
        </ul>
        <div class="shelf"></div>
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
      ReviewsData: null,
      ReviewsData2: null,
      BottomPhrazhes: null,
      title: null
    };
  },
  methods: {
    commonRouterHandler(arg) {
      this.$router.push({
        path: "/reviews/" + arg + ""
      });
    }
  },
  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[4];
    }, 1000);
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/reviews")
      .then(response => {
        _this.ReviewsData = response.data.data;
        _this.ReviewsData.map((el, index) => {
          var shrinkText = el.text_ka.slice(0, 470) + "...";
          el.text_ka = shrinkText;
        });
        // setTimeout(function() {
        //   document.getElementById("loader").style.display = "none";
        // }, 500);
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
  },
  mounted() {
    // setTimeout(function() {
    //   document.getElementById("loader").style.display = "none";
    // }, 500);
  }
};
</script>

<style></style>
