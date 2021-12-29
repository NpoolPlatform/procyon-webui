import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'faq',
        component: () => import('pages/Faq.vue')
      },
      {
        path: 'legal',
        component: () => import('pages/Legal.vue')
      },
      {
        path: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'register',
        component: () => import('pages/Register.vue')
      },
      {
        path: 'forget',
        component: () => import('pages/Forget.vue')
      },
      {
        path: 'change/password',
        component: () => import('pages/ChangePassword.vue')
      },
      {
        path: 'dashboard',
        component: () => import('pages/DashBoard.vue')
      },
      {
        path: 'account',
        component: () => import('pages/Account.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
