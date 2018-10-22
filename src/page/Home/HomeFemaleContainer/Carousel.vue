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
import Swiper from 'swiper';

export default {
  data() {
    return {
      bannerData: [
        { imgUrl: 'https://pic.motieimg.com/img/153983461438375789_700_240.jpg'},
        { imgUrl: 'http://pic.motieimg.com/img/151617971035306616_700_240.jpg'},
        { imgUrl: 'https://pic.motieimg.com/img/15398273263201769_700_240.jpg'}
      ]
    }
  },
  mounted: function () {
    let zy_Swiper = new Swiper('.zy-Carousel-swiper-container', {
      autoplay: true
    });
  }
};
</script>

<style lang="scss">
  .Carousel{
    overflow: hidden;
  }
</style>
