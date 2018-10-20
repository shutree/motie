<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "./sass/base.scss";
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
import axios from 'axios';
Vue.use(axios);
Vue.prototype.$axios = axios;

// loading
import { Indicator } from 'mint-ui';
Vue.prototype.$loading = Indicator;

import './sass/base.scss';
export default {
  name: "App"
};
</script>

<style>
#app {

}
</style>
