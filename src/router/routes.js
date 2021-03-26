
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageProfile.vue') },
      { path: '/story', component: () => import('pages/Story.vue') },
      { path: '/live', component: () => import('pages/PageVideoMain.vue') },
      { path: '/live/categories', component: () => import('pages/Categories.vue') }
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
