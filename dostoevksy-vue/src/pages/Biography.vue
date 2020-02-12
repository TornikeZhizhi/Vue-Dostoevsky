<template>
  <div v-if="BiographyInfo">
    <div class="biography_fluid common_fade">
      <div class="biography_nd_main_content">
        <div class="biography_img">
          <img src="../assets/images/46657256_1962923843827383_4554362696245444608_n.png" />
        </div>

        <div class="biography_nd_tittle" v-if="title">
          <h2>{{ title }}</h2>

          <div class="bio_tittle_orn">
            <div class="bio_tittle_decor">
              <img src="../assets/images/das2.png" />
            </div>

            <kinesis-container>
              <kinesis-element :strength="15" type="depth_inv" :distance="10">
                <div class="candle">
                  <div class="flame">
                    <div class="shadows"></div>
                    <div class="top"></div>

                    <div class="bottom"></div>
                  </div>
                </div>

                <img class="do" src="../assets/images/dostoevsky_l.png" />
              </kinesis-element>
            </kinesis-container>
            <div class="bio_info_sd">
              <h3>თეოდორ დოსტოევსკი</h3>
              <span>(1821-1881)</span>
            </div>
          </div>
        </div>

        <div class="biography_nd_main_text">
          <div class="bio_nd_text_wrapper" v-for="data in BiographyInfo" :key="data.id">
            <div class="bio_nd_end_orn">
              <img src="../assets/images/Asset 2.png" />
            </div>

            <div class="bio_nd_tittle">
              <h3>{{ data.title_ka }}</h3>
            </div>

            <div class="bio_nd_text">
              <div v-html="data.text_ka"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!BiographyInfo">
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
      BiographyInfo: [],
      BottomPhrazhes: null,
      title: null
    };
  },

  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[2];
    }, 1000);
    axios
      .get("http://datainfo.online/api/ka/abouts")
      .then(response => {
        if (response.statusText == "OK") {
          this.BiographyInfo = response.data.data;
          // setTimeout(function() {
          //   document.getElementById("loader").style.display = "none";
          // }, 500);
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://datainfo.online/api/ka/abouts_phrases")
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

<style>
</style>
