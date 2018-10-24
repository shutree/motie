<template>
  <div class="CardTwo">

    <div class="title">
      <span>{{cardData.title}}</span>
    </div>

    <div class="zy-CardTwo-swiper-container" ref="container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="( book, index) in books">
          <img style="width: 100px" :src='book.imgUrl'>
          <span class="name">{{book.name}}</span>
        </div>
      </div>
    </div>
    <div class="zy-swiper-pagination" ref="pagination"></div>

    <mt-button style="fontSize: 14px; color: red" v-if="buttonText" size="large">{{buttonText}}</mt-button>

  </div>
</template>

<script>
import Swiper from "swiper";
import { Button } from "mint-ui";

export default {
  data() {
    return {
      zy_swiper: null
    };
  },
  props: ["cardData", "buttonText", "cardId"],
  computed: {
    books: function() {
      return this.cardData.books;
    }
  },
  methods: {
    initSwiper: function() {
      let container = this.$refs.container;
      let pagination = this.$refs.pagination;
      this.zy_swiper = new Swiper(container, {
        slidesPerView: 3,
        slidesPerGroup: 3,
        pagination: {
          el: pagination,
          clickable: true
        }
      });
    }
  },
  mounted: function() {
    if (JSON.stringify(this.cardData) == "{}") {
      // console.log("empty");
    } else {
      // console.log("mounted initSwiper");
      this.initSwiper();
    }
  },
  updated() {
    // this.zy_swiper.destroy();
    this.initSwiper();
  }
};
</script>

<style lang="scss">
.CardTwo {
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
  .zy-CardTwo-swiper-container {
    margin-bottom: 20px;
    .swiper-wrapper {
      .swiper-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .zy-swiper-pagination {
    position: absolute;
    right: 30px;
    top: 0;
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      margin: 0 3px;
      display: inline-block;
      border-radius: 100%;
      background: gray;
      opacity: 0.2;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: #ff0000;
    }
  }
}
</style>
