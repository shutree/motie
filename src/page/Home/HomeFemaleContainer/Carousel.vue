<template>
  <div class="Carousel">
    <div class="zy-Carousel-swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="( item, index) in bannerData">
          <router-link to="/details">
            <img style="width: 100%" :src='item.imgUrl'>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {};
  },
  computed: {
    bannerData() {
      let homeCardsData = this.$store.getters.homeCardsData;
      return homeCardsData.banner;
    }
  },
  updated: function() {
    let zy_Carousel_swiper;
    if (!zy_Carousel_swiper) {
      zy_Carousel_swiper = new Swiper(".zy-Carousel-swiper-container", {
        autoplay: true
      });
    }
  }
};
</script>

<style lang="scss">
.Carousel {
  overflow: hidden;
}
</style>
