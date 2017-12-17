import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/index'
import Order from '@/components/order/order'
import Mine from '@/components/mine/mine'

Vue.use(Router)



export default new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: '/index'
    },
    // 首页
    {
      path: '/index',
      component: Index
    },

    // 订单
    {
      path: '/order',
      component: Order
    },
    // 我的
    {
      path: '/mine',
      component: Mine
    }
  ]
})
