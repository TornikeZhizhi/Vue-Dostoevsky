<template>
  <div class="container-fluid page-section only_books">
    <div class="container">
      <div class="row">
        <div class="col-md-12 book_col">
          <h3 class="text-center">წიგნები</h3>
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
                          <img
                            src="../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg"
                          />
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

                <a href="book/იდიოტი" class="btn-6">
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
      BooksData: null
    };
  },
  created() {
    axios
      .get("http://datainfo.online/api/ka/books")
      .then(response => {
        this.BooksData = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>
