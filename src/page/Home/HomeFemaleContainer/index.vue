<template>
  <div class="HomeFamaleContainer">
    <Carousel></Carousel>
    <CategoryBar></CategoryBar>
    <!-- 主编推荐 -->
    <CardTwo :cardData="demoCardData"></CardTwo>
    <!-- 黄金联赛 -->
    <CardTwo :cardData="goldLeague" buttonText="更多参赛作品>"></CardTwo>
    <!-- 本期主打分类 -->
    <CardThree :cardData="mainBooks" buttonText="进入更多分类>"></CardThree>
    <!-- 书友收藏 -->
    <CardTwo :cardData="bookFriendCollection"></CardTwo>
    <!-- 完本精品 -->
    <CardThree :cardData="finishedBooks"></CardThree>
    <!-- 无线风向榜 -->
    <CardTwo :cardData="hotDirection" buttonText="查看人气前100名>"></CardTwo>
    <!-- 新书抢先 -->
    <CardThree :cardData="newBooksArrival"></CardThree>

    <Discover></Discover>

  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import CategoryBar from "./CategoryBar.vue";
import CardTwo from "./CardTwo.vue";
import CardThree from "./CardThree.vue";
import Discover from "./Discover.vue";

export default {
  data() {
    return {
      cardsNeedButton: []
    };
  },
  components: {
    Carousel,
    CategoryBar,
    CardTwo,
    CardThree,
    Discover
  },
  computed: {
    demoCardData() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.demoCardData;
    },
    goldLeague() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.goldLeague;
    },
    mainBooks() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.mainBooks;
    },
    bookFriendCollection() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.bookFriendCollection;
    },
    finishedBooks() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.finishedBooks;
    },
    hotDirection() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.hotDirection;
    },
    newBooksArrival() {
      let cards = this.$store.getters.cards;
      if (!cards) return {};

      return cards.newBooksArrival;
    }
  },
  beforeMount: function() {
    this.cardsNeedButton = this.$store.getters.cardsNeedButton;
  }
};
</script>

<style lang="scss">
</style>
