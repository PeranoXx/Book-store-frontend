import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/books',
        name: 'books',
        component: () => import('@/views/BookView.vue')
      },
      {
        path: '/books/:slug',
        name: 'books-detail',
        component: () => import('@/views/BookDetail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0 }
  }
})

export default router
