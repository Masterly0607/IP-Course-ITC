import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        // This tells Vue Router that any URL matching /some-value should render the PageComponent.vue component, with some-value stored in route.params.pageId.
        path: '/:pageId', // Dynamic route
        component: () => import('@/components/PageComponent.vue'), 
       
       
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
