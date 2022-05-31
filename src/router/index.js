import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DiscoverView from '@/views/DiscoverView.vue'
import UploadView from '@/views/UploadView.vue'
import CollectionsView from '@/views/CollectionsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LogIn from '@/views/LogIn.vue'
import Register from '@/views/RegisterUser.vue'
import SmoothiesList from '@/views/SmoothiesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
      meta: { requiresSideBar: false, requiresHeader: false }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresSideBar: false, requiresHeader: false }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
    {
      path: '/discover',
      component: DiscoverView,
      name: 'discover',
      meta: { requiresSideBar: true, requiresHeader: true },
      children: [
        {
      path: '/discover/smoothies',
      name: 'smoothies',
      component: SmoothiesList,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
            {
      path: '/discover/postres',
      name: 'postres',
      component: SmoothiesList,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
            {
      path: '/discover/cremasysopas',
      name: 'cremas y sopas',
      component: SmoothiesList,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
            {
      path: '/discover/pastas',
      name: 'pastas',
      component: SmoothiesList,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
                {
      path: '/discover/veganas',
      name: 'veganas',
      component: SmoothiesList,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
                {
      path: '/discover/veganfastfood',
      name: 'vegan fast food',
      component: SmoothiesList,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
      ]
    },

    {
      path: '/upload',
      name: 'upload',
      component: UploadView,
      meta: { requiresSideBar: true, requiresHeader: true }
    },
    {
      path: '/collections',
      name: 'collections',
      component: CollectionsView,
      meta: { requiresSideBar: true, requiresHeader: true }
      /* component: () => import('../views/CollectionsView.vue') */
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresSideBar: true, requiresHeader: true }
      /* component: () => import('../views/CollectionsView.vue') */
    },
  ]

}

)

export default router
