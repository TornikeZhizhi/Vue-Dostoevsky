<template>
  <div class="facts_fluid">
    <div class="book_nd_main_content">
      <!-- background bottom -->
      <div class="book_nd_main_content_bottom_bg">
        <img src="../assets/images/orn_red2.png" />
      </div>

      <div class="fact_nd_tittle">
        <h2>საინტერესო ფაქტები</h2>
        <img
          class="fact_mn_pc"
          src="../assets/images/45769039_1235016983330731_1471345084237611008_n.png"
        />

        <div class="book_nd_ornament">
          <img src="../assets/images/fdAsset 1.png" />
        </div>
      </div>

      <div class="facts_nd_main_text" v-for="list in lists" :key="list.id">
        <div class="facts_decor_top">
          <img src="../assets/images/orn_red.png" />
        </div>

        <div class="facts_tittle">
          <h3>{{ list.title_ka }}</h3>
        </div>

        <div class="facts_nd_info">
          <p>{{ list.text_ka }}</p>
        </div>
      </div>

      <b-pagination
        class="pagination"
        :total-rows="totalRows"
        v-model="currentPage"
        :per-page="perPage"
        hide-goto-end-buttons
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      data: [],
      test: null
    };
  },

  computed: {
    lists() {
      //   setTimeout(() => {
      const items = this.data;
      console.log(items);
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
      //   }, 1000);
    },
    totalRows() {
      //   setTimeout(() => {
      return this.data.length;
      //   }, 2200);
    }
  },
  mounted() {
    axios
      .get("http://datainfo.online/api/ka/facts")
      .then(response => {
        this.data = response.data.data;
        console.log(this.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 0px solid #dee2e6;
  background-color: #7d3920;
  padding: 5px 10px;
  font-size: 25px;
  color: #fff;
  font-family: "Conv_bebas-neue-bold";
}

.page-item {
  border-radius: 20px 0px 15px 0px;
  overflow: hidden;
  position: relative;
  background-color: #7d3920;
  transition: all 0.4s;
  margin: 0 4px;
}

.page-item.active .page-link {
  background: #000 !important;
}
.page-item:last-child .page-link,
.page-item:first-child .page-link {
  display: none;
}

.page-link:hover {
  background-color: #7d3920;
  color: #fff;
}
</style>
