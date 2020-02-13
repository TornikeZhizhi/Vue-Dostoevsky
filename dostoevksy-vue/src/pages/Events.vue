<template>
  <div>
    <div class="events_fluid common_fade" v-if="eventData">
      <div class="events_main_content">
        <!-- // background-image -->
        <div class="book_nd_main_content_bg"></div>

        <!-- // background-image -->

        <div class="event_tittle">
          <h2>ღონისძიებები</h2>
        </div>
        <div
          class="events_nd_main_wrapper"
          v-for="data in eventData"
          :key="data.id"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div class="event_img">
            <img :src="data.image" />
          </div>
          <div class="events_nd_info">
            <h3>{{ data.title_ka }}</h3>
            <span>{{ data.location_ka }}</span>

            <div class="event_nd_text">
              <div v-html="data.text_ka"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!eventData">
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
      eventData: null,
      BottomPhrazhes: null,
      title: null
    };
  },
  created() {
    setTimeout(() => {
      this.title = this.$store.state.pagesTitles[6];
    }, 1000);
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/events")
      .then(response => {
        this.eventData = response.data.data;
      })
      .catch(function(error) {});

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
