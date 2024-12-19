import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
         path: '/',
         redirect:'/page-one',
         component: () => import ('@/layouts/MainLayout.vue'),
         children:[
          {
            path:'page-one',
            name: 'page-one',
            component: () => import ('@/pages/PageOne.vue'),

          },
          {
            path:'page-two',
            name: 'page-two',
            component: () => import ('@/pages/PageTwo.vue'),

          },
          {
            path:'page-three',
            name: 'page-three',
            component: () => import ('@/pages/PageThree.vue'),

          },
         ]
        }
  ],
})

export default router
