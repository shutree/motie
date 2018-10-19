<template>
  <div class="HomeFamaleContainer">
    <Carousel></Carousel>
    <CategoryBar></CategoryBar>
    <RecommendBox></RecommendBox>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CategoryBar from "../components/CategoryBar.vue";
import RecommendBox from "../components/RecommendBox.vue";

export default {
  components: {
    Carousel,
    CategoryBar,
    RecommendBox
  }
};
</script>

<style lang="scss">
</style>
