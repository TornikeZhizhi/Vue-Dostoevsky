<template>
  <div class="container-fluid page-section only_books" giv-if="BooksData">
    <div class="container">
      <div class="row">
        <div class="col-md-12 book_col">
          <h3 class="text-center">{{title}}</h3>
          <div class="row book_box_row">
            <div
              class="col-lg-3 col-md-6 d-flex justify-content-center"
              v-for="data in BooksData"
              :key="data.id"
            >
              <ul class="align">
                <li>
                  <figure class="book">
                    <ul class="hardcover_front">
                      <li>
                        <div class="coverDesign yellow">
                          <img src="../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg" />
                        </div>
                      </li>
                      <li></li>
                    </ul>
                    <ul class="page">
                      <li></li>
                      <li>
                        <h4>{{ data.title_ka }}</h4>
                        <div class="book_r_content">
                          <span>{{ data.text_ka }}</span>
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
                <h4>{{ data.title_ka }}</h4>
                <div class="book_text_wrapper">
                  <p>{{ data.text_ka }}</p>
                </div>
                <router-link
                  tag="a"
                  :to="{
                path: '/books/'+ data.title_ka+'',
              
          }"
                >
                  <span class="btn-62">გაიგეთ მეტი</span>
                </router-link>
                <!-- <a href class="btn-6" @click.prevent="booksHandler(data.title_ka)">
                  <span class="btn-62">გაიგეთ მეტი</span>
                </a>-->
              </div>
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
      BooksData: [],
      BottomPhrazhes: null,
      title: this.$store.state.pagesTitles[3]
    };
  },
  methods: {
    // booksHandler(arg) {
    //   this.$router.push({ name: "booksInner", query: { id: "private" } });
    //   console.log(arg);
    // }
  },
  created() {
    axios
      .get("http://datainfo.online/api/ka/books")
      .then(response => {
        this.BooksData = response.data.data;
        console.log(response);
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
