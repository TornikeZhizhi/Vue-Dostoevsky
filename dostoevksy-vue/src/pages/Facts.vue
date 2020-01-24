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
      <div class="facts_text_wrapper">
        <div
          class="facts_nd_main_text"
          v-for="list in collection"
          :key="list.id"
        >
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
      </div>

      <div class="facts_pagination">
        <div class="btn-group">
          <button
            class="btn btn-primary"
            v-for="(p, index) in pagination.pages"
            @click.prevent="setPage(p)"
            :key="index"
            ref="pagButton"
          >
            {{ p }}
          </button>
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
      data: [],
      perPage: 3,
      pagination: {}
    };
  },
  computed: {
    collection() {
      return this.paginate(this.data);
    }
  },
  methods: {
    setPage(p) {
      if (this.$refs.pagButton) {
        for (var i = 0; i < this.$refs.pagButton.length; i++) {
          this.$refs.pagButton[i].classList.remove("active");
        }
        this.$refs.pagButton[p - 1].classList.add("active");
      }

      this.pagination = this.paginator(this.data.length, p);
    },
    paginate(data) {
      return _.slice(
        data,
        this.pagination.startIndex,
        this.pagination.endIndex + 1
      );
    },
    paginator(totalItems, currentPage) {
      var startIndex = (currentPage - 1) * this.perPage,
        endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
      };
    }
  },
  created() {
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/facts")
      .then(response => {
        this.data = response.data.data;
        _this.setPage(1);
        setTimeout(function() {
          this.$refs.pagButton[0].classList.add("active");
        }, 10);
      })
      .catch(function(error) {});
  }
};
</script>

<style>
.facts_pagination {
  display: flex;
  justify-content: center;
}

.btn-group {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  /* background-color: #fff; */
  border: 0px solid #dee2e6;
  /* background-color: #7d3920; */
  padding: 5px 10px;
  font-size: 25px;
  color: #fff;
  font-family: "Conv_bebas-neue-bold";
}
.btn-primary {
  border-radius: 20px 0px 15px 0px;
  overflow: hidden;
  position: relative;
  background-color: #7d3920;
  transition: all 0.4s;
  margin: 0 4px;
  border: none;
  font-size: 25px;
  outline: none;
}
.btn-primary:focus {
  outline: none !important;
  box-shadow: none !important;
}

.btn-primary:hover {
  background: #7d3920;
  transform: translateY(-5px);
  outline: none !important;
  box-shadow: none !important;
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

.btn-primary.active {
  background: #000 !important;
}
</style>
