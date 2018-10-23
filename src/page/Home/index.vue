<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Home",
  data() {
    return {};
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

<style lang="scss">
</style>
