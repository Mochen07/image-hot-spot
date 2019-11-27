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
      meta: { title: 'Home', noCache: true, affix: true },
      component: Layout
    },
    {
      path: '/preview',
      component: () => import('@/components/HotspotImage/Main/ShowPage.vue')
    },
    featureRouter,
    elementRouter
  ]
})
