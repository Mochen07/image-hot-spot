import Layout from '@/layout/layout'

const featureRouter = {
  path: '/feature',
  component: Layout,
  redirect: 'noredirect',
  name: 'Feature',
  children: [
    {
      path: 'image-hot-area',
      component: () => import('@/views/feature/image-hot-area'),
      name: 'ImageHotArea',
      meta: { title: 'ImageHotArea', noCache: true }
    }
  ]
}

export default featureRouter
