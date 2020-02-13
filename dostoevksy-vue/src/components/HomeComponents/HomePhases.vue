<template>
  <div class="container-fluid text-center fraz_fluid" v-if="PhrazhesData">
    <kinesis-container>
      <kinesis-element :strength="2" type="depth_inv" :distance="10">
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <h5 class="book_image2">"{{ PhrazhesData }}"</h5>

          <!-- <span>{{ PhrazhesData.text_ka }}</span> -->
        </div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {
  props: ["PhrazhesData"]
};
</script>

<style></style>
