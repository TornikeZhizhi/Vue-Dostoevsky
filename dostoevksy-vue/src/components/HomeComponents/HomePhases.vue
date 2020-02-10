<template>
  <div class="container-fluid text-center fraz_fluid" v-if="PhrazhesData">
    <kinesis-container>
      <kinesis-element :strength="7" type="depth_inv" :distance="10">
        <div class="wow fadeInUp2" data-wow-offset="300">
          <h5 class="book_image2">{{ PhrazhesData }}</h5>

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
