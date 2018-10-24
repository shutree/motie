<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import Mint from "mint-ui";
import axios from "axios";
import { Indicator } from "mint-ui";

import "mint-ui/lib/style.css";
import "./sass/base.scss";

Vue.use(Mint);
Vue.use(axios);

Vue.prototype.$axios = axios;

// loading
Vue.prototype.$loading = Indicator;

export default {
  name: "App"
};
</script>

<style>
#app {
}
</style>
