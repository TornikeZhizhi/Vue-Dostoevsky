<template>
  <div>
    <div class="container-fluid header_fluid">
      <div class="container">
        <div id="header" class="col-md-12 menu_col">
          <div class="row">
            <div class="col-lg-2 col-9 d-flex align-items-center">
              <div class="main_tittle">
                <router-link tag="h1" to="/">
                  <a>
                    თეოდორ
                    <span>დოსტოევსკი</span>
                  </a>
                </router-link>
              </div>
            </div>

            <div
              class="col-lg-10 col-3 d-flex align-items-center navbar"
              id="myNavbar"
            >
              <nav class="defaulf_nav">
                <ul>
                  <!-- <router-link
                    v-for="data in NavData"
                    tag="li"
                    class="link"
                    :key="data.id"
                    :to="data.slug_en"
                    :exact="data.slug_en == '/home' ? false : true"
                    active-class="active"
                  >
                    <a href>
                      <i :class="data.faIcons"></i>
                      {{ data.title_ka }}
                    </a>
                  </router-link>-->

                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    exact
                    to="/home"
                  >
                    <a href>
                      <i class="fas fa-home"></i>
                      მთავარი
                    </a>
                  </router-link>
                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    to="/biography"
                  >
                    <a href>
                      <i class="fas fa-feather"></i>
                      ბიოგრაფია
                    </a>
                  </router-link>
                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    to="/characters"
                  >
                    <a href>
                      <i class="fas fa-user-alt"></i>
                      პერსონაჟები
                    </a>
                  </router-link>
                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    to="/books"
                  >
                    <a href>
                      <i class="fas fa-book"></i>
                      წიგნები
                    </a>
                  </router-link>
                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    to="/reviews"
                  >
                    <a href>
                      <i class="fas fa-star"></i>
                      რეცენზიები
                    </a>
                  </router-link>
                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    to="/facts"
                  >
                    <a href>
                      <i class="fas fa-church"></i>
                      საინტერესო ფაქტები
                    </a>
                  </router-link>
                  <router-link
                    tag="li"
                    class="link"
                    active-class="active"
                    to="/events"
                  >
                    <a href>
                      <i class="fas fa-calendar-alt"></i>
                      ღონისძიებები
                    </a>
                  </router-link>
                </ul>
              </nav>
              <!-- <div class="language_box_n" style="display:block">
                <span @click="languageHandler('ka')">geo</span>
                <span @click="languageHandler('en')">eng</span>
              </div> -->

              <!-- Resp Menu -->

              <div class="resp_menu">
                <div id="myNav" class="overlay">
                  <div class="language_box_n">
                    <span @click="languageHandler('ka')">geo</span>
                    <span @click="languageHandler('en')">eng</span>
                    <!-- <span>rus</span> -->
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="closebtn"
                    onclick="closeNav()"
                    >×</a
                  >
                  <div class="overlay-content">
                    <ul>
                      <li>
                        <a href="/home" class="active">
                          <i class="fas fa-home"></i>მთავარი
                        </a>
                      </li>
                      <li>
                        <a href="/biography">
                          <i class="fas fa-feather"></i>ბიოგრაფია
                        </a>
                      </li>
                      <li>
                        <a href="/characters">
                          <i class="fas fa-user-alt"></i>პერსონაჟები
                        </a>
                      </li>
                      <li>
                        <a href="/books">
                          <i class="fas fa-book"></i>წიგნები
                        </a>
                      </li>
                      <li>
                        <a href="/reviews">
                          <i class="fas fa-star"></i>რეცენზიები
                        </a>
                      </li>
                      <li>
                        <a href="/interesting-facts">
                          <i class="fas fa-church"></i>საინტერესო ფაქტები
                        </a>
                      </li>
                      <li>
                        <a href="/events">
                          <i class="fas fa-calendar-alt"></i>ღონისძიებები
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <span
                  class="hamburger_menu"
                  style="font-size:40px;cursor:pointer;color: #ebc076;"
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </span>
              </div>
              <!-- Resp Menu -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main_loader" id="loader">
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      NavData: null,
      FaIcons: [
        "fas fa-home",
        "fas fa-feather",
        "fas fa-user-alt",
        "fas fa-book",
        "fas fa-star",
        "fas fa-church",
        "fas fa-calendar-alt"
      ]
    };
  },
  methods: {
    languageHandler(arg) {
      this.$store.state.lang = arg;
      // console.log(this.$store.state.lang);
    }
  },

  created() {
    // setTimeout(function() {
    //   document.getElementById("loader").style.display = "none";
    // }, 1000);
    console.log(this.$store.state.lang);
    axios
      .get("http://datainfo.online/api/ka/pages")
      .then(response => {
        this.NavData = response.data.data;
        this.NavData[0].slug_en = "/home";
        // console.log(this.NavData);
        for (let i = 0; i < response.data.data.length; i++) {
          this.NavData[i].faIcons = this.FaIcons[i];
          this.$store.state.pagesTitles.push(this.NavData[i].title_ka);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.defaulf_nav ul li.active a {
  color: #ebc076 !important;
}
</style>
