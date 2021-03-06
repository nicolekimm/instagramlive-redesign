
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageProfile.vue') },
      { path: '/story', component: () => import('pages/Story.vue') },
      { path: '/livestream', component: () => import('pages/RealTime.vue') },

      { path: '/live', component: () => import('pages/PageVideoMain.vue') },
      { path: '/live/categories', component: () => import('pages/Categories.vue') }, 
      { path: '/live/categories/sports', component: () => import('pages/Sports.vue') }, 
      { path: '/live/categories/food', component: () => import('pages/Food.vue') }, 
      { path: '/live/categories/travel', component: () => import('pages/Travel.vue') },
      { path: '/live/categories/shopping', component: () => import('pages/Shopping.vue') }, 
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
