// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueLazyLoad from 'vue-lazyload';


import 'swiper/dist/css/swiper.css';
import 'animate.css/animate.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee,faHome,faListAlt,faBook,faSortAmountUp,faShoppingBasket,faServer,faBookReader,faCoins,faChessQueen,faAward,faTruckPickup,faCertificate} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCoffee,faHome,faListAlt,faBook,faSortAmountUp,faShoppingBasket,faServer,faBookReader,faCoins,faChessQueen,faAward,faTruckPickup,faCertificate)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(VueLazyLoad);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
