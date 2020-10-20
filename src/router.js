import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/components/containers/Dashboard')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/components/containers/Search')
    },
    {
      path: '/collection',
      name: 'Library',
      component: () => import('@/components/containers/Collection')
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
      component: () => import('@/components/containers/Artist')
    }
  ]
});

router.beforeEach((_, ___, next) => {
  Store.commit('resetScrollPosition');
  next();
});

export default router;