<template>
  <div class="container-fluid section3">
    <div class="container bio_container_parent text-center">
      <h2 class="bio_tittle">
        <router-link tag="a" to="/biography">{{ title }}</router-link>
      </h2>

      <div class="row">
        <div class="col-md-12 bio_coll">
          <div class="row">
            <div class="col-md-6 bio_img_col d-flex justify-content-center">
              <kinesis-container>
                <kinesis-element :strength="15" type="depth_inv" :distance="10">
                  <div
                    class="bio_img wow fadeInLeft"
                    data-wow-offset="300"
                    style="visibility: visible; animation-name: fadeInLeft;"
                  >
                    <img src="../../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg" />
                  </div>
                </kinesis-element>
              </kinesis-container>
            </div>

            <div class="col-md-6 bio_info_col">
              <div
                class="bio_container wow fadeInRight"
                data-wow-offset="300"
                style="visibility: visible; animation-name: fadeInRight;"
              >
                <h2>
                  ბიოგრაფია
                  <br />თეოდორ დოსტოევსკი
                </h2>

                <div class="chilhood" v-for="data in homeBiography" :key="data.id">
                  <h3>{{ data.title_ka }}</h3>
                  <div class="home_bio_wrapper">
                    <div v-html="data.text_ka"></div>
                  </div>
                </div>

                <router-link class="btn-6" tag="a" to="/biography">
                  <span class="btn-62">გაიგეთ მეტი</span>
                </router-link>
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
      homeBiography: []
    };
  },
  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[2];
    }, 1000);

    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/home_abouts")
      .then(response => {
        _this.homeBiography = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
