import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BlogPage from "@/views/BlogPage.vue";
import PostDetails from "@/views/PostDetails.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'blog',
      component: BlogPage
    },
    {
      path: '/posts/:id',
      name: 'postDetails',
      component: PostDetails,
      props:true
    },
    ,
    {
      path: '/:pathMatch(.*)*',
      name:'NotFound',
      component:NotFound
    }

  ]
})

export default router
