import { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    needLogin?: boolean
  }
}

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
        component: () => import('pages/ChangePassword.vue'),
        meta: {
          needLogined: true
        }
      },
      {
        path: 'dashboard',
        component: () => import('pages/DashBoard.vue'),
        meta: {
          needLogined: true
        }
      },
      {
        path: 'account',
        component: () => import('pages/Account.vue'),
        meta: {
          needLogined: true
        }
      },
      {
        path: 'affiliate',
        component: () => import('pages/Affiliate.vue'),
        meta: {
          needLogined: true
        }
      },
      {
        path: 'notice',
        component: () => import('pages/Notice.vue')
      },
      {
        path: 'security',
        component: () => import('pages/Security.vue'),
        meta: {
          needLogined: true
        }
      },
      {
        path: 'contact',
        component: () => import('pages/Contact.vue')
      },
      {
        path: 'kyc',
        component: () => import('pages/KYC.vue'),
        meta: {
          needLogined: true
        }
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
