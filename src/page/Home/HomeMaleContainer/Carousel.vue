<template>
  <div class="Carousel">
    <div class="zy-Carousel-swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="( book, index) in books">
          <router-link to="/details">
            <img style="width: 100%" :src='book.imgUrl'>
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
    books() {
      let cards = this.$store.getters.cards;
      if (!cards) return [];

      let books = cards.bannerBooks.books;
      return books;
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
