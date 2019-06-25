import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('@/components/HotspotImage/Main/ShowPage.vue')
    }
  ]
})
