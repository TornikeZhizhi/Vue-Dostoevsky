<template>
  <div v-if="BiographyInfo">
    <div class="biography_fluid">
      <div class="biography_nd_main_content">
        <div class="biography_img">
          <img src="../assets/images/46657256_1962923843827383_4554362696245444608_n.png" />
        </div>

        <div class="biography_nd_tittle" v-if="title">
          <h2>{{title}}</h2>

          <div class="bio_tittle_orn">
            <div class="candle">
              <div class="flame">
                <div class="shadows"></div>
                <div class="top"></div>

                <div class="bottom"></div>
              </div>
            </div>
            <div class="bio_tittle_decor">
              <img src="../assets/images/das2.png" />
            </div>

            <img class="do" src="../assets/images/dostoevsky_l.png" />
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

<style></style>
