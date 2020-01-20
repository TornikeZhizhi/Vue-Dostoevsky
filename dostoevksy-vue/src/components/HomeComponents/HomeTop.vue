<template>
  <div class="col-md-12 main_right_col" v-if="homeTopText">
    <div class="info_box">
      <h2>{{ homeTopText.data.title_ka }}</h2>
      <div class="main_info_wrapper">
        <p>
          {{ homeTopText.data.text_ka }}
        </p>
      </div>
      <a @click="biographyHandler()" class="btn-6"
        ><span class="btn-62">გაიგეთ მეტი<span></span></span
      ></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      homeTopText: null
    };
  },
  methods: {
    biographyHandler() {
      this.$router.push("/biography");
    }
  },
  created() {
    axios
      .get("http://datainfo.online/api/ka/home_first")
      .then(response => {
        this.homeTopText = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
