<template>
  <div class="HomeFamaleContainer">
    <Carousel></Carousel>
    <CategoryBar></CategoryBar>
    <RecommendBox></RecommendBox>
    <PersonalRecommend></PersonalRecommend>
    <MainClassification></MainClassification>
    <Collection></Collection>
    <Quality></Quality>
    <Wireless></Wireless>
    <Newbook></Newbook>
    <Discover></Discover>


  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import CategoryBar from "./CategoryBar.vue";
import RecommendBox from "./RecommendBox.vue";
import PersonalRecommend from "./PersonalRecommend.vue";
import MainClassification from "./MainClassification.vue";
import Collection from "./Collection.vue";
import Quality from "./Quality.vue";
import Wireless from "./Wireless.vue"
import Newbook from "./Newbook.vue"
import Discover from "./Discover.vue"

export default {
  components: {
    Carousel,
    CategoryBar,
    RecommendBox,
    PersonalRecommend,
    MainClassification,
    Collection,
    Quality,
    Wireless,
    Newbook,
    Discover
  }
};
</script>

<style lang="scss">
</style>
