<template>
  <div class="RecommendBox">
    <div class="title">
      <span>主编推荐</span>
    </div>
    <div class="zy-RecommendBox-swiper-container" ref="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="( item, index) in 9">
          <img style="width: 100px" class="lazy" src="https://cdn.motieimg.com/book/0011/111537/1.jpg?">
          <span class="name">阴间少帅{{index}}</span>
        </div>
      </div>
    </div>

    <div class="zy-RecommendBox-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  mounted: function() {
    let zy_Swiper = new Swiper(".zy-RecommendBox-swiper-container", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: ".zy-RecommendBox-swiper-pagination",
        clickable: true
      }
    });

    this.getContainerWidth();
  },
  methods: {
    getContainerWidth() {
      console.log(123);
    }
  }
};
</script>

<style lang="scss">
.RecommendBox {
  position: relative;
  overflow: hidden;
  .title {
    span {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .swiper-wrapper {
    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .zy-RecommendBox-swiper-pagination {
    position: absolute;
    right: 30px;
    top: 0;
    .swiper-pagination-bullet {
      width: 5px;
      height: 5px;
      display: inline-block;
      border-radius: 100%;
      background: red;
      margin: 0 5px;
    }
  }
}
</style>
