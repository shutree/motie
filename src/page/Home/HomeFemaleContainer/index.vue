<template>
  <div class="HomeFamaleContainer">
    <Carousel></Carousel>
    <CategoryBar></CategoryBar>
    <cardTwo :demoCardData="demoCardData" ></cardTwo>
    <!-- <CardTwo></CardTwo>
    <PersonalRecommend></PersonalRecommend>
    <MainClassification></MainClassification>
    <Collection></Collection>
    <Wireless></Wireless>
    <CardOne></CardOne>
    <Discover></Discover> -->

  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import CategoryBar from "./CategoryBar.vue";
import CardTwo from "./CardTwo.vue";
import PersonalRecommend from "./PersonalRecommend.vue";
import MainClassification from "./MainClassification.vue";
import Collection from "./Collection.vue";
import Wireless from "./Wireless.vue";
import Discover from "./Discover.vue";

import CardOne from "./CardOne.vue";

export default {
  components: {
    Carousel,
    CategoryBar,
    CardTwo,
    PersonalRecommend,
    MainClassification,
    Collection,
    Wireless,
    CardOne,
    Discover
  },
  computed: {
    demoCardData(){
      let cards = this.$store.getters.cards;
      if(!cards) return {};

      return cards.demoCardData;
    }
  }
};
</script>

<style lang="scss">
</style>
