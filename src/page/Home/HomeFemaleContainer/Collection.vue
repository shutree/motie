<template>
  <div class="Collection">
    <h4><span>书友收藏</span></h4>
    <ul class="shc">
      <li :key="index" v-for="(card, index) in 3">
        <img src="./shc.jpg" />
        医品尖兵
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Collection {
  h4 {
    height: 30px;
    span {
      border-bottom: 2px solid red;
    }
  }
  .shc {
    display: flex;
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
