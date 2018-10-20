import Vue from 'vue';
import Router from 'vue-router';

import Home from '../page/Home/index.vue';
  import HomeMaleContainer from '../page/Home/HomeMaleContainer';
  import HomeFemaleContainer from '../page/Home/HomeFemaleContainer';
  import HomePublishContainer from '../page/Home/HomaPublishContainer';

import Login from '../page/Login';
import Details from '../page/Details';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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
          component: HomeFemaleContainer
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
    },
    {
      path: '/category',
      name: 'category',
      component:{
        template:`<div>分类页</div>`
      }
    }
  ]
})
