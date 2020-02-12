<template>
  <div>
    <div class="col-md-12 main_right_col common_fade" v-if="homeTopTextka">
      <particles></particles>
      <div class="info_box">
        <h2>{{ homeTopTextMain.data.title_ka }}</h2>
        <div class="main_info_wrapper" v-html="homeTopTextMain.data.text_ka"></div>
        <a @click.prevent="biographyHandler()" class="btn-6">
          <span class="btn-62">
            გაიგეთ მეტი
            <span></span>
          </span>
        </a>
      </div>
    </div>
    <div v-if="!homeTopTextka">
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
  </div>
</template>

<script>
import axios from "axios";
import particles from "./Particles.vue";
export default {
  data() {
    return {
      homeTopTextka: null,
      homeTopTexten: null
    };
  },
  components: {
    particles
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
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/home_first")
      .then(response => {
        _this.homeTopTextka = response.data;

        var shrinkText = _this.homeTopTextka.data.text_ka.slice(0, 360) + "...";
        _this.homeTopTextka.data.text_ka = shrinkText;
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
.main_right_col {
  position: relative;
}
.info_box {
  position: relative;
  z-index: 100;
}
.particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
