import Vue from 'vue';
import Router from 'vue-router';

import Home from '../page/Home';
  import HomeMaleContainer from '../components/HomeMaleContainer.vue';
  import HomeFamaleContainer from '../components/HomeFamaleContainer.vue';
  import HomePublishContainer from '../components/HomePublishContainer.vue';

import Login from '../page/Login';
import Details from '../page/Details';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props:true,
      children:[
        {
          path:'/mt_male',
          name:'mt_male',
          component: HomeMaleContainer
        },
        {
          path:'/mt_famale',
          name:'mt_famale',
          component: HomeFamaleContainer
        },
        {
          path:'/mt_publish',
          name:'mt_publish',
          component: HomePublishContainer
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})
