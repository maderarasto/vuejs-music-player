import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import ('@/components/Dashboard')
    },
    {
      path: '/search',
      component: () => import('@/components/Search')
    },
    {
      path: '/collection',
      component: () => import('@/components/Collection')
    }
  ]
});

export default router;