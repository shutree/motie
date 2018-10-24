<template>
  <div class="MainClassification">
    <div class="title">
      {{cardData.title}}
    </div>
    <div class="card" :key="index" v-for="(book, index) in books">
      <div class="thumb_img">
        <img style="width: 100%" :src='book.imgUrl' alt="">
      </div>
      <div class="card_right">
        <div>{{book.name}}</div>
        <p>{{book.author}}</p>
        <p class="desc">{{book.brief}}</p>
      </div>
      <button>立即阅读</button>
    </div>

    <mt-button style="fontSize: 14px; color: red" v-if="buttonText" size="large">{{buttonText}}</mt-button>
  </div>
</template>

<script>
export default {
  props: ['cardData', 'buttonText'],
  computed: {
    books: function() {
      return this.cardData.books;
    }
  }
};
</script>

<style lang="scss">
.MainClassification {
  padding: 0 10px;
  .title {
    padding: 10px 0;
    margin-bottom: 20px;
  }
  .card {
    position: relative;
    display: flex;
    padding-bottom: 10px;
    .thumb_img {
      width: 100px;
    }
    .card_right {
      flex: 1;
      padding: 0 10px;
    }
    button {
      font-size: 12px;
      padding: 5px;
      background: white;
      border: 1px solid red;
      border-radius: 10px;
      color: red;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
