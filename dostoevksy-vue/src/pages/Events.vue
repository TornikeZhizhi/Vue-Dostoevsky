<template>
  <div class="events_fluid">
    <div class="events_main_content">
      <!-- // background-image -->
      <div class="book_nd_main_content_bg"></div>

      <!-- // background-image -->

      <div class="event_tittle">
        <h2>ღონისძიებები</h2>
      </div>
      <div class="events_nd_main_wrapper" v-for="data in eventData" :key="data.id">
        <div class="event_img">
          <img :src="data.image" />
        </div>
        <div class="events_nd_info">
          <h3>{{data.title_ka}}</h3>
          <span>{{data.location_ka}}</span>

          <div class="event_nd_text">
            <p>{{data.text_ka}}</p>
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
      eventData: null
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
  }
};
</script>

<style>
</style>