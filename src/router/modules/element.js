import Layout from '@/layout/layout'

const elementRouter = {
  path: '/element',
  component: Layout,
  redirect: 'noredirect',
  name: 'Element',
  children: [
    {
      path: 'table',
      component: () => import('@/views/element/pages/el-table-main'),
      name: 'Table',
      meta: { title: 'Table', noCache: true }
    }
  ]
}

export default elementRouter
