<template>
  <div>
    <div class="container-fluid reviews_nd_nd_fluid common_fade" v-if="innerData">
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
            <kinesis-container style="display:inline-block">
              <kinesis-element :strength="15" type="depth_inv" :distance="10">
                <img :src="innerData.image" />
              </kinesis-element>
            </kinesis-container>
            <!--</figure>-->
          </div>

          <h3>{{ innerData.title_ka }}</h3>
          <span>{{ innerData.book_ka }}</span>
        </div>

        <div class="reviews_nd_main_text">
          <div v-html="innerData.text_ka"></div>
        </div>
      </div>
    </div>

    <!-- <div class="book_nd_fluid" v-if="!innerData">
      <div class="book_nd_main_content error_info">
        <h2>ინფორმაცია ვერ მოიძებნა</h2>
      </div>
    </div>-->
    <div v-if="!innerData">
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
      innerData: [],
      BottomPhrazhes: null
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
      })
      .catch(function(error) {
        console.log(error);
        _this.innerData = false;
      });

    axios
      .get("http://datainfo.online/api/ka/reviews_phrases")
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
