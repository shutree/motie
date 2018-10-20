<template>
  <div class="header">
    <div id="logo">
      <img src="http://pic.motieimg.com/img/14878507417971314_159_34.png">
    </div>
    <nav class="nav">
      <router-link class="nav-link" :key="index" v-for="(item, index) in cate" :to="item.link">{{item.text}}</router-link>
    </nav>
    <font-awesome-icon icon="coffee" class="login_icon" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      cate: [
        { text: "女版", link: "mt_famale" },
        { text: "男版", link: "mt_male" },
        { text: "出版", link: "mt_publish" }
      ]
    };
  }
};
</script>

<style lang="scss">
.header {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #logo {
    padding-left: 20px;
    img {
      font-size: 1.8rem;
      height: 1.8rem;
    }
  }
  .nav {
    height: 4rem;
    line-height: 4rem;
    overflow: hidden;
    text-align: center;
    font-size: 1.5rem;
    color: #666;
    a {
      width: 3rem;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      color: #666;
      line-height: 4rem;
      overflow: hidden;
      font-size: 15px;
    }
  }
  .login_icon{
    padding: 15px;
  }
}
</style>
