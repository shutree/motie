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
</style>