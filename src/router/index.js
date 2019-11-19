import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout'
import featureRouter from './modules/feature'
import elementRouter from './modules/element'

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
    },
    featureRouter,
    elementRouter
  ]
})
