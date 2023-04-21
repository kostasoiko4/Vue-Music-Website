const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue') },
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/music', component: () => import('pages/Music.vue') },
      { path: '/literature', component: () => import('pages/Literature.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
