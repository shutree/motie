<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import "./sass/base.scss";
=======
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
>>>>>>> 6dc1d5cd46d5aedc7fc6344739a2bf2acc774838
export default {
  name: "App"
};
</script>

<style>
#app {

}
</style>
