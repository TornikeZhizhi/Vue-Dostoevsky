<template>
  <div class="container-fluid char_fluid page-section section4">
    <div class="container">
      <div class="row">
        <div class="col-md-12 char_col">
          <div class="char_container text-center">
            <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              <router-link tag="a" to="/characters">პერსონაჟები</router-link>
            </h2>

            <section
              id="demos"
              style="max-width:900px"
              v-if="homeCharacktersData"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <carousel
                :autoplay="true"
                :nav="false"
                :smartSpeed="1200"
                :autoplayTimeout="5000"
                :dots="false"
                :margin="10"
                :loop="true"
                :items="4"
              >
                <div
                  v-for="(data, index) in homeCharacktersData"
                  :key="index"
                  style="width:100%"
                >
                  <img
                    :src="data.image"
                    @click="commonRouterHandler(data.title_ka)"
                  />
                  <span>{{ data.title_ka }}</span>
                </div>
              </carousel>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      title: this.$store.state.pagesTitles[1],
      homeCharacktersData: null
    };
  },

  methods: {
    commonRouterHandler(arg) {
      this.$router.push({
        path: "/characters/" + arg + ""
      });
    }
  },
  created() {
    axios
      .get("http://datainfo.online/api/ka/home_characters")
      .then(response => {
        this.homeCharacktersData = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#demos img {
  width: 100%;
  height: 280px;
  cursor: pointer;
}

#demos img {
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
}

#demos span {
  padding: 5px 0;

  align-items: center;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  color: #fff;
  margin-right: 5px;
  font-style: italic;
  font-family: "Conv_bebas-neue-bold";
}
</style>
