<template>
  <div class="Home">
    <div class="app_downloag_banner" v-if="showAD" >
      <img src="https://pic.motieimg.com/_resources/mobile/image/appdown_img2.png" alt="">
      <a href="http://www.baidu.com" class="btn_download"></a>
      <a class="btn_close_appDownload" @click="showAD = !showAD" ></a>
    </div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Home",
  data() {
    return {
      showAD: true
    };
  },
  components: { Header },
  mounted: function() {
    this.$axios({
      url: "/static/homeData.json"
    }).then(res => {
      setTimeout(() => {
        this.$store.commit({
          type: "LOAD_HOME_DATA",
          cards: res.data.cards
        });
      }, 2000);
    });
  }
};
</script>

<style scoped lang="scss">
.Home {
  .app_downloag_banner {
    position: relative;
    background: gray;
    overflow: hidden;
    img {
      width: 100%;
    }
    a.btn_download {
      display: block;
      width: 80px;
      height: 30px;
      position: absolute;
      top: 7px;
      right: 32px;
      background: rgba(255, 0, 0, 0);
    }
    a.btn_close_appDownload {
      background: red url("./close.png") no-repeat;
      background-size: 20px 20px;
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: -6px;
      right: -7px;
      border-radius: 100%;
    }
  }
}
</style>
