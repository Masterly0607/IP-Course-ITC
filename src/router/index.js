import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import ProductComponent from '@/components/ProductComponent.vue'

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
      name: 'category',
      component: CategoryItem,
    },
    {
      path:'/products/:productId',
      name: 'product',
      component: ProductComponent,
    }
  ]
})

export default router
