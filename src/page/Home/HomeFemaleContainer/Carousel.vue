<template>
  <div class="Carousel">
    <div class="zy-Carousel-swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="( item, index) in 4">
          <router-link to="/details">
            <img style="width: 100%" src="https://pic.motieimg.com/img/15398273263201769_700_240.jpg">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {

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
