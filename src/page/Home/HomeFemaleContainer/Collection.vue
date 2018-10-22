<template>
  <div class="Collection">
    <h4><span>书友收藏</span></h4>
    <ul class="shc">
      <li :key="index" v-for="(book, index) in books">
        <img :src='book.imgUrl' />
        {{book.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          name: "医品尖兵",
          author: "...",
          brief: "...",
          imgUrl: "https://cdn.motieimg.com/book/0010/106584/1.jpg?"
        },
        {
          name: "无人可逃",
          author: "...",
          brief: "...",
          imgUrl: "https://cdn.motieimg.com/book/0011/110067/2.jpg?"
        },
        {
          name: "蛮荒化龙决",
          author: "...",
          brief: "...",
          imgUrl: "https://cdn.motieimg.com/book/0010/107521/1.jpg?"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.Collection {
  padding: 0 10px;
  h4 {
    height: 30px;
    span {
      border-bottom: 2px solid red;
    }
  }
  .shc {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      img {
        width: 120px;
        height: 150px;
      }
    }
  }
}
</style>
