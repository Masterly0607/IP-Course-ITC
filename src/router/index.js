import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      home:'home',
      component: HomeView,

    },
    {
      path:'/categories/:categoryId',
      home:'category',
      component: () => import("@/views/CategoryView.vue"),

    },
    {
      path:'/products/:productId',
      home:'product',
      component: () => import("@/views/ProductView.vue"),

    },
   
  ]
})

export default router
