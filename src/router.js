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
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/test.vue'),
      children: [
        {
          path: 'le-table-main',
          name: 'le-table-main',
          component: () => import('@/views/test/pages/el-table-main.vue')
        }
      ]
    }
  ]
})
