<template>
  <div class="Quality">
    <h4><span>完本精品</span></h4>
    <ul>
      <li class="li" :key="index" v-for="(card, index) in 3">
        <div class="left">
          <img src="./shc.jpg" height="133" width="100" alt="" />
        </div>
        <div class="right">
          <h4>娇妻如云</h4>
          <p>兰泽</p>
          <p>萌软小娘子和威武大夫君的故事。姚芸儿从没想过自己会嫁给一个屠夫，而且还比她年长十多岁
            <mt-button class="liji" size="small">立即阅读</mt-button>
          </p>
          <p>
            <mt-button class="btn" type="danger" size="small">丧尸</mt-button>
            <mt-button class="btn" type="primary" size="small">爽文</mt-button>
          </p>
        </div>
      </li>
    </ul>
    <mt-button class="bt" size="large">进入完本频道></mt-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.k {
  background-color: #fff;
  color: red;
}
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
      width: 130px;
      height: 150px;
    }
  }
}
.li {
  overflow: hidden;
}
.left {
  float: left;
  height: 160px;
  width: 30%;
  position: relative;
  img {
    height: 100px;
    width: 100px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
.right {
  float: left;
  height: 150px;
  width: 60%;
  padding: 20px 20px 0 0;
  position: relative;
  p {
    font-size: 12px;
    line-height: 12px;
    padding: 5px 45px 0 0;
    a {
      color: black;
      margin-left: 5px;
    }
    .btn {
      float: left;
      margin-left: 5px;
      width: 55px;
      height: 25px;
    }
    .liji {
      position: absolute;
      top: 35px;
      background-color: #fff;
      border: 1px solid red;
      color: red;
      height: 20px;
    }
  }
  span {
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 20px;
    font-size: 20px;
    color: #ccc;
  }
}
.bt {
  color: red;
}
</style>
