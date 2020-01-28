<template>
  <div class="container-fluid char_fluid page-section section4">
    <div class="container">
      <div class="row">
        <div class="col-md-12 char_col">
          <div class="char_container text-center">
            <h2>
              <a href="characters/">{{title}}</a>
            </h2>

            <section id="demos" style="max-width:900px">
              <carousel :autoplay="true" :items="4" :loop="true" :margin="20">
                <img src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg" />

                <img src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg" />
                <img src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg" />
                <img src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg" />
                <img src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg" />
                <img src="../../assets/images/22154171_1500562513371948_6027405587324085279_n.jpg" />
              </carousel>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
  data() {
    return {
      title: this.$store.state.pagesTitles[1]
    };
  }
};
</script>

<style>
#demos img {
  width: 100%;
  height: 280px;
}

#demos img {
  border-radius: 10px;
  overflow: hidden;
}
</style>
