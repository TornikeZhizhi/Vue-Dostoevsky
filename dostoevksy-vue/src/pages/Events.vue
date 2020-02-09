<template>
  <div>
    <div class="events_fluid">
      <div class="events_main_content">
        <!-- // background-image -->
        <div class="book_nd_main_content_bg"></div>

        <!-- // background-image -->

        <div class="event_tittle">
          <h2>{{ title }}</h2>
        </div>
        <div
          class="events_nd_main_wrapper"
          v-for="data in eventData"
          :key="data.id"
        >
          <div class="event_img">
            <img :src="data.image" />
          </div>
          <div class="events_nd_info">
            <h3>{{ data.title_ka }}</h3>
            <span>{{ data.location_ka }}</span>

            <div class="event_nd_text">
              <p>{{ data.text_ka }}</p>
            </div>
          </div>
        </div>
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
      title: this.$store.state.pagesTitles[6]
    };
  },
  created() {
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/events")
      .then(response => {
        this.eventData = response.data.data;
        console.log(this.eventData);
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
