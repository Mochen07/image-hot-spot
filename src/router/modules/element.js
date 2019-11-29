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
      name: 'El-Table',
      meta: { title: 'Table', noCache: true }
    },
    {
      path: 'form',
      component: () => import('@/views/element/pages/el-form-upload'),
      name: 'El-Form',
      meta: { title: 'El-Form', noCache: true }
    }
  ]
}

export default elementRouter
