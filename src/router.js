import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/components/pages/Dashboard')
    },
    {
      path: '/search',
      name: 'Browse',
      component: () => import('@/components/pages/Browse')
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: () => import('@/components/pages/Search')
    },
    {
      path: '/collection',
      name: 'Library',
      component: () => import('@/components/pages/Collection')
    },
    {
      path: '/collection/tracks',
      name: 'LikedSongs',
      component: () => import('@/components/playlist/Playlist')
    },
    {
      path: '/playlists/:id',
      name: 'Playlist',
      component: () => import('@/components/playlist/Playlist')
    },
    {
      path: '/artists/:id',
      name: 'Artist',
      component: () => import('@/components/pages/Artist')
    }
  ]
});

router.beforeEach((_, ___, next) => {
  Store.commit('resetScrollPosition');
  next();
});

export default router;