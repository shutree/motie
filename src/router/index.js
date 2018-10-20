import Vue from 'vue'
import Router from 'vue-router'

import Home from '../page/Home'
import Login from '../page/Login'
import Details from '../page/Details'

Vue.use(Router)

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
          path:'/mt_famale',
          name:'mt_famale',
          component:{
            template:`<div>
              这就是女版
            </div>`
          }
        },
        {
          path:'/mt_male',
          name:'mt_male',
          component:{
            template:`<div>
              这就是男版
            </div>`
          }
        },
        {
          path:'/mt_publish',
          name:'mt_publish',
          component:{
            template:`<div>
              这就是出版
            </div>`
          }
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
