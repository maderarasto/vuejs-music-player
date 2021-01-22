import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/pages/Dashboard')
    },
    {
      path: '/search',
      name: 'Browse',
      component: () => import('@/pages/Browse')
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: () => import('@/pages/Search')
    },
    {
      path: '/search/:query/tracks',
      name: 'SearchTracks',
      component: () => import('@/pages/SearchTracks')
    },
    {
      path: '/search/:query/artists',
      name: 'SearchArtists',
      component: () => import('@/pages/SearchArtists')
    },
    {
      path: '/collection',
      name: 'Library',
      component: () => import('@/pages/Collection')
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
      component: () => import('@/pages/Artist')
    },
    {
      path: '/albums/:id',
      name: 'Album',
      component: () => import('@/pages/Album')
    }
  ]
});

router.beforeEach((_, ___, next) => {
  Store.commit('resetScrollPosition');
  next();
});

export default router;