<template>
  <div class="RecommendBox">
    <div class="title">
      <span>主编推荐</span>
    </div>
    <div class="zy-RecommendBox-swiper-container" ref="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="( book, index) in books">
          <img style="width: 100px" :src='book.imgUrl'>
          <span class="name">{{book.name}}</span>
        </div>
      </div>
    </div>

    <div class="zy-RecommendBox-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data(){
    return {
      books: [
        { name: '都市超级修仙人', imgUrl: 'https://cdn.motieimg.com/book/0009/99331/1.jpg?'},
        { name: '岭南鬼术', imgUrl: 'https://cdn.motieimg.com/book/0011/110545/1.jpg?'},
        { name: '女总裁的医品高手', imgUrl: 'https://cdn.motieimg.com/book/0011/111365/1.jpg?'}
      ]
    }
  },
  mounted: function() {
    let zy_Swiper = new Swiper(".zy-RecommendBox-swiper-container", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: ".zy-RecommendBox-swiper-pagination",
        clickable: true
      }
    });

  },
  methods: {

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
