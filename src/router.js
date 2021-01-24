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
      component: () => import('@/pages/search/Browse')
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: () => import('@/pages/search/Search')
    },
    {
      path: '/search/:query/tracks',
      name: 'SearchTracks',
      component: () => import('@/pages/search/SearchTracks')
    },
    {
      path: '/search/:query/artists',
      name: 'SearchArtists',
      component: () => import('@/pages/search/SearchResults'),
      props: {
        type: 'artist'
      }
    },
    {
      path: '/search/:query/albums',
      name: 'SearchAlbums',
      component: () => import('@/pages/search/SearchResults'),
      props: {
        type: 'album'
      }
    },
    {
      path: '/search/:query/playlists',
      name: 'SearchPlaylists',
      component: () => import('@/pages/search/SearchResults'),
      props: {
        type: 'playlist'
      }
    },
    {
      path: '/collection',
      name: 'Library',
      redirect: '/collection/playlists',
      component: () => import('@/pages/collections/Collection'),
      children: [
        {
          path: '/collection/tracks',
          name: 'LikedSongs',
          component: () => import('@/components/playlist/Playlist')
        },
        {
          path: '/collection/playlists',
          name: 'Playlists',
          component: () => import('@/pages/collections/PlaylistCollection')
        },
        {
          path: '/collection/artists',
          name: 'Artists',
          component: () => import('@/pages/collections/ArtistCollection')
        },
        {
          path: '/collection/albums',
          name: 'Albums',
          component: () => import('@/pages/collections/AlbumCollection')
        }
      ]
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
      component: () => import('@/pages/Album'),

    }
  ]
});

router.beforeEach((_, ___, next) => {
  Store.commit('resetScrollPosition');
  next();
});

export default router;