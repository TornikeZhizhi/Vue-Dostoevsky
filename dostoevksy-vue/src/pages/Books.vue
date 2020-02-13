<template>
  <div>
    <div
      class="container-fluid page-section only_books common_fade"
      v-if="BooksData"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 book_col">
            <h3
              class="text-center"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <router-link to="/books" tag="a">წიგნები</router-link>
            </h3>
            <div class="row book_box_row">
              <div
                class="col-lg-3 col-md-6 d-flex justify-content-center"
                v-for="data in BooksData"
                :key="data.id"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <ul class="align">
                  <li>
                    <figure class="book">
                      <ul class="hardcover_front">
                        <li>
                          <div class="coverDesign yellow">
                            <img :src="data.image" />
                          </div>
                        </li>
                        <li></li>
                      </ul>
                      <ul class="page">
                        <li></li>
                        <li>
                          <h4>{{ data.title_ka }}</h4>
                          <div class="book_r_content">
                            <span v-html="data.text_ka"></span>
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
                  <h4 @click="commonRouterHandler(data.title_ka)">
                    {{ data.title_ka }}
                  </h4>
                  <div class="book_text_wrapper">
                    <div v-html="data.text_ka"></div>
                  </div>

                  <a
                    :href="'/books/' + data.title_ka"
                    class="btn-6"
                    @click.prevent="commonRouterHandler(data.title_ka)"
                  >
                    <span class="btn-62">გაიგეთ მეტი</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!BooksData">
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
    <appCommonPhrazes
      v-if="BottomPhrazhes"
      :PhrazhesData="BottomPhrazhes.title_ka"
    ></appCommonPhrazes>
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
      BooksData: [],
      BottomPhrazhes: null,
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
      .get("http://datainfo.online/api/ka/books")
      .then(response => {
        _this.BooksData = response.data.data;

        _this.BooksData.map((el, index) => {
          var shrinkText = el.text_ka.slice(0, 370) + "...";
          el.text_ka = shrinkText;
        });
        console.log(_this.linkHandlerData);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://datainfo.online/api/ka/books_phrases")
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
