import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '', 
    component: () => import('@/layouts/MainLayout.vue'), 
    children: [
      {
        path: '/:page',
        component: () => import('@/components/PageComponent.vue'),
        children: [
          {
            path: 'section/:section',
            component: () => import('@/components/SectionComponent.vue'), 
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
