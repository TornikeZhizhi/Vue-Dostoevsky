<template>
  <div class="container-fluid section2">
    <div id="penbox">
      <img
        src="../../assets/images/feather-pen-and-paper-png-scrolled-paper-and-quill-pen-png-clipart-image-572.png"
      />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12 book_col">
          <h3 class="text-center">
            <router-link tag="a" to="/books">{{title}}</router-link>
          </h3>

          <div
            class="row book_box_row wow fadeInUp"
            data-wow-offset="300"
            style="visibility: visible; animation-name: fadeIn;"
          >
            <div
              class="col-lg-3 col-md-6 d-flex justify-content-center"
              v-for="data in homeBooksData"
              :key="data.id"
            >
              <ul class="align">
                <li>
                  <figure class="book">
                    <ul class="hardcover_front">
                      <li>
                        <div class="coverDesign yellow">
                          <img
                            src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg"
                            width="100%"
                          />
                        </div>
                      </li>
                      <li></li>
                    </ul>
                    <ul class="page">
                      <li></li>
                      <li>
                        <h4>{{data.title_ka}}</h4>
                        <div class="book_r_content">
                          <span>{{data.text_ka}}</span>
                        </div>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <!-- Back -->
                    <ul class="hardcover_back">
                      <li></li>
                      <li></li>
                    </ul>
                    <ul class="book_spine">
                      <li></li>
                      <li></li>
                    </ul>
                  </figure>
                </li>
                <li></li>
                <li></li>
              </ul>

              <div class="book_infos">
                <h4 @click="commonRouterHandler(data.title_ka)">{{data.title_ka}}</h4>
                <div class="book_text_wrapper">
                  <p>{{data.text_ka}}</p>
                </div>

                <a href class="btn-6" @click="commonRouterHandler(data.title_ka)">
                  <span class="btn-62">გაიგეთ მეტი</span>
                </a>
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
      homeBooksData: [],
      title: null
    };
  },
  methods: {
    commonRouterHandler(arg) {
      this.$router.push({
        path: "/books/" + arg + ""
      });
    }
  },

  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[3];
    }, 1000);

    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/home_books")
      .then(response => {
        _this.homeBooksData = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>