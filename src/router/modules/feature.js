import Layout from '@/layout/layout'

const featureRouter = {
  path: '/feature',
  component: Layout,
  redirect: 'noredirect',
  name: 'Feature',
  children: [
    // 图片热区
    {
      path: 'image-hot-area',
      component: () => import('@/views/feature/image-hot-area'),
      name: 'ImageHotArea',
      meta: { title: 'ImageHotArea', noCache: true }
    },
    // 标签栏测试空页面
    {
      path: ':date',
      name: 'testTagsView',
      meta: { title: 'TestTagsView', noCache: true }
    }
  ]
}

export default featureRouter
