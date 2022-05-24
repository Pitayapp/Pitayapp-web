import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DiscoverView from '@/views/DiscoverView.vue'
import UploadView from '@/views/UploadView.vue'
import CollectionsView from '@/views/CollectionsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LogIn from '@/views/LogIn.vue'
import Register from '@/views/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: LogIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/discover',
      name: 'discover',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DiscoverView
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView
    },
    {
      path: '/collections',
      name: 'collections',
      component: CollectionsView
      /* component: () => import('../views/CollectionsView.vue') */
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
      /* component: () => import('../views/CollectionsView.vue') */
    },
  ]

})

export default router
