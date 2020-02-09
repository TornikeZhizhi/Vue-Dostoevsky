<template>
  <div>
    <div class="container-fluid reviews_nd_nd_fluid" v-if="innerData">
      <div class="reviews_nd_main_content">
        <!-- <div class="reviews_dec_img">
			<img src="/assets/images/46734469_197909494419929_8100903869011197952_n.png">
        </div>-->

        <div class="reviews_dec_bott">
          <img src="../assets/images/ormanents2.png" />
        </div>

        <div class="revies_nd_main_img">
          <div class="review_img">
            <!--<figure>-->

            <img :src="innerData.image" />
            <!--</figure>-->
          </div>

          <h3>{{innerData.title_ka}}</h3>
          <span>{{innerData.book_ka}}</span>
        </div>

        <div class="reviews_nd_main_text">
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

    axios
      .get(
        "http://datainfo.online/api/ka/reviews/" + this.$route.params.id + ""
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