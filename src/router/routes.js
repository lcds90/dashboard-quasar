
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'theme', name: 'theme', component: () => import('pages/Theme.vue'), props: true },
      { path: 'category/:slug', name: 'category', component: () => import('pages/ItemsCategory.vue'), props: true },
      { path: 'detail', name: 'detail', component: () => import('pages/Details.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
