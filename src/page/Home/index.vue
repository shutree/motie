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
  mounted: function (){
    this.$axios({
      url: '/static/homeData.json'
    }).then( res => {
      this.$store.commit({
        type: 'LOAD_HOME_DATA',
        homeData: res.data 
      });

      setTimeout(() => {
        let homeData = this.$store.getters.homeData;
        console.log(homeData)
      }, 3000);
    });
  }
};
</script>

<style lang="scss">
</style>
