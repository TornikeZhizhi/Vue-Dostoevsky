<template>
  <div class="col-md-12 main_right_col" v-if="homeTopTextka">
    <div class="info_box">
      <h2>{{ homeTopTextMain.data.title_ka }}</h2>
      <div class="main_info_wrapper">
        <p>{{ homeTopTextMain.data.text_ka }}</p>
      </div>
      <a @click="biographyHandler()" class="btn-6">
        <span class="btn-62">
          გაიგეთ მეტი
          <span></span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      homeTopTextka: null,
      homeTopTexten: null
    };
  },
  computed: {
    homeTopTextMain() {
      if (this.$store.state.lang == "ka") {
        return this.homeTopTextka;
      } else {
        return this.homeTopTexten;
      }
    }
  },
  methods: {
    biographyHandler() {
      this.$router.push("/biography");
    }
  },
  // filters: {
  //   StringFilter(value) {
  //     return value.slice(0, 270) + "...";
  //   }
  // },
  created() {
    axios
      .get("http://datainfo.online/api/ka/home_first")
      .then(response => {
        this.homeTopTextka = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://datainfo.online/api/en/home_first")
      .then(response => {
        this.homeTopTexten = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#my-scrollbar {
  width: 500px;
  height: 500px;
  overflow: auto;
}
</style>
