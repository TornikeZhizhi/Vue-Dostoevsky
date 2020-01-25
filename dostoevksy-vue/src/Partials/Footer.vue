<template>
  <div class="container-fluid contact_fluid page-section">
    <!--Contact Popup-->
    <div class="contact_popup_fluid" id="pop1">
      <!--<div class="succes_box">-->
      <!--    <span>თქვენი მეილი წარმატებით გაიგზავნა</span>-->
      <!--</div>-->

      <!--<div class="decline_box">-->
      <!--       <span>გთხოვს შეავსოყ ყველა სავალდებულო ველი</span>-->

      <!--</div>-->
    </div>

    <div id="footer_pegion">
      <img src="../assets/images/Asset 2deco.png" />
    </div>

    <div class="container cont_cont">
      <h2>კონტაქტი</h2>
      <div class="row">
        <div
          class="col-md-6 wow fadeInLeft"
          data-wow-offset="300"
          style="visibility: visible; animation-name: fadeInLeft;"
        >
          <div class="form_box">
            <form class="forms" action method="post" @submit.prevent="postHandler()">
              <input
                type="text"
                autocomplete="off"
                v-model="name"
                name="name"
                placeholder="სახელი..."
                id="name"
              />
              <input type="email" v-model="email" name="email" placeholder="მაილი..." id="email" />
              <input
                type="text"
                v-model="title"
                name="subject"
                placeholder="სათაური..."
                id="subject"
              />
              <textarea v-model="text" placeholder="დაწერე წერილი..." id="message"></textarea>
              <input type="submit" value="გაგზავნა" id="sendm" />
            </form>
          </div>
        </div>

        <div
          class="col-md-6 wow fadeInRight"
          data-wow-offset="300"
          style="visibility: visible; animation-name: fadeInRight;"
        >
          <div class="info_right">
            <div class="contact_info_box">
              <p>{{footerData.text_ka}}</p>
            </div>

            <div class="fa_icons">
              <a target="_blank" v-bind:href="footerLink
              ">
                <span>
                  <i class="fab fa-facebook"></i>
                  {{footerData.facebook}}
                </span>
              </a>
              <span>
                <i class="fas fa-envelope"></i>
                {{footerData.email}}
              </span>
              <span>
                <i class="fas fa-map-marker"></i>
                {{footerData.location_ka}}
              </span>
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
      footerData: [],
      footerLink: "https://www.facebook.com/DostoevskyGeo",
      name: null,
      email: null,
      title: null,
      text: null
    };
  },

  methods: {
    postHandler() {
      const formData = {
        name: this.name,
        email: this.email,
        title: this.title,
        text: this.text
      };
      var _this = this;
      axios
        .post("https://axios-post-4dd09.firebaseio.com/messages.json", {
          formData
        })
        .then(function(response) {
          _this.name = null;
          _this.email = null;
          _this.title = null;
          _this.text = null;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created() {
    var _this = this;
    axios
      .get("http://datainfo.online/api/ka/contact")
      .then(response => {
        this.footerData = response.data.data;
      })
      .catch(function(error) {});
  }
};
</script>

<style>
</style>