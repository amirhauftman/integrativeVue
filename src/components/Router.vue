import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('@/views/UpdateAngel.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupForm.vue'),
  },
  {
    path: '/delete',
    name: 'deleteAllUsers',
    component: () => import('@/views/DeleteAllUsers.vue'),
  },
  {
    path: '/findallusers',
    name: 'findAllUsers',
    component: () => import('@/views/FindAllUsers.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
