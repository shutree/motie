<template>
  <div class="header">
    <div id="logo">
      <img src="http://pic.motieimg.com/img/14878507417971314_159_34.png">
    </div>
    <nav class="nav">
      <router-link class="nav-link" activeClass="active" :key="index" v-for="(item, index) in tabs" :to="item.link">{{item.text}}</router-link>
    </nav>
    <router-link to="/login">
      <font-awesome-icon icon="coffee" class="login_icon" />

    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabIndex: 0,
      tabs: [
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
    overflow: hidden;
    text-align: center;
    font-size: 1.5rem;
    color: #666;
    a {
    height: 25px;
    box-sizing: border-box;
    width: 2.5rem;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #666;
    overflow: hidden;
    font-size: 15px;
    }
    .active{
      border-bottom: 2px solid red;
    }
  }
  .login_icon{
    padding: 15px;
  }
}
</style>
