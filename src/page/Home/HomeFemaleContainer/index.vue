<template>
  <div class="HomeFamaleContainer">
    <Carousel></Carousel>
    <CategoryBar></CategoryBar>
    <RecommendBox></RecommendBox>
    <PersonalRecommend></PersonalRecommend>
    <MainClassification></MainClassification>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import CategoryBar from "./CategoryBar.vue";
import RecommendBox from "./RecommendBox.vue";
import PersonalRecommend from "./PersonalRecommend.vue";
import MainClassification from "./MainClassification.vue";

export default {
  components: {
    Carousel,
    CategoryBar,
    RecommendBox,
    PersonalRecommend,
    MainClassification
  }
};
</script>

<style lang="scss">
</style>
