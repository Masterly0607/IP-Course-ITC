import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/:page', // Dynamic page parameter
    component: () => import('@/layouts/MainLayout.vue'), // Layout for all pages
    children: [
      {
        path: '', // Default route for the page
        component: () => import('@/components/PageComponent.vue'), // Page-level content
        children: [
          {
            path: 'section/:section', // Nested dynamic route for sections
            component: () => import('@/components/SectionComponent.vue'), // Component for sections
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
