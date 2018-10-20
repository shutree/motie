<template>
  <div class="MainClassification">
      <div class="title">
        本期主打分类
      </div>
      <div class="card" :key="index" v-for="(card, index) in 3">
        <div class="thumb_img">
          <img style="width: 100%" src="https://cdn.motieimg.com/book/0011/111537/1.jpg?" alt="">
        </div>
        <div class="card_right">
          <div>老子是条龙</div>
          <p>周阳</p>
          <p class="desc">黑狗，现代杀手组织的金牌杀手，一朝穿越成和哥哥通通不存在的！逆袭？美男？当厨娘？通通都来吧！</p>
        </div>
        <button>立即阅读</button>
      </div>
  </div>
</template>

<script>


export default {

};
</script>

<style lang="scss">
  .MainClassification{
    background: gray;
    padding: 0 10px;
    .title{
      padding: 10px 0;
    }
    .card{
      position: relative;
      display: flex;
      padding-bottom: 10px;
      .thumb_img{
        width: 250px;
      }
      .card_right{
        padding: 0 10px;
      }
      button{
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
