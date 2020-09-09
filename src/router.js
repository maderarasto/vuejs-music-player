import Vue from 'vue';
import VueRouter from 'vue-router';

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
      component: () => import('@/components/containers/LikedSongs')
    },
    {
      path: '/playlists/:id',
      name: 'Playlist',
      component: () => import('@/components/containers/Playlist')
    }
  ]
});

export default router;