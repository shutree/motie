<template>
  <div>
    <div class="header">
      <img src="http://pic.motieimg.com/img/14878507417971314_159_34.png">
      <nav class="nav">
        <router-link class="nav-link" :key="index" v-for="(item, index) in cate" :to="item.link">{{item.text}}</router-link>
      </nav>
      <i></i>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "",
      cate: [
        { text: "女版", link: "mt_famale" },
        { text: "男版", link: "mt_male" },
        { text: "出版", link: "mt_publish" }
      ]
    };
  },
  methods: {
    motieFamale(id) {
      this.$router.push({ name: "mt_famale", params: { id } });
    },
    motieMale(id) {
      this.$router.push({ name: "mt_male", params: { id } });
    },
    motiePulish(id) {
      this.$router.push({ name: "mt_publish", params: { id } });
    }
  }
};
</script>

<style lang="scss">
.header {
  background: #fff;
  position: relative;
  height: 4rem;
  img {
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: block;
    font-size: 1.8rem;
    padding-top: 0.11rem;
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
  padding-left: 90px;
  a {
    width: 3rem;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #666;
    line-height: 4rem;
    overflow: hidden;
    text-align: center;
    font-size: 15px;
    color: #666;
  }
}
</style>