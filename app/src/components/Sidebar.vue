<template>
  <div class="spotify-sidebar">
    <router-link :to="{name: 'Home'}">
      <img class="logo" src="@/assets/spotify_logo.png" alt="spotify logo" />
    </router-link>

    <div class="main-options">
      <IconLink :route="homeRoute" fa-icon="fa-home" text="Home" :active="isLinkActive('/')" />
      <IconLink :route="searchRoute" fa-icon="fa-search" text="Search" :active="isLinkActive('/search')" />
      <IconLink :route="libraryRoute" fa-icon="fa-book" text="Your Library" :active="isLinkActive('/collection')" />
    </div>

    <div class="playlists-options">
      <p>Playlists</p>
      <router-link 
        to="/collection/tracks" 
        class="btn-liked-songs"
        :style="getLinkActiveStyle('/collection/tracks')">
        <i class="fas fa-heart"></i>
        <h4>Liked Songs</h4>
      </router-link>
      <hr />
      <TextLink 
        v-for="playlist in playlists" 
        :key="playlist.id"
        :route="getPlaylistRoute(playlist)"
        :text="playlist.name"
        :active="isLinkActive(`/playlists/${playlist.id}`)" />
    </div>
  </div>
</template>

<script>
import IconLink from '@/components/IconLink';
import TextLink from '@/components/TextLink';

export default {
  name: 'Sidebar',
  components: {
    IconLink,
    TextLink
  },

  computed: {
    playlists() {
      return this.$store.getters.playlists;
    },

    homeRoute() {
      return { name: 'Home'}
    },

    searchRoute() {
      return { name: 'Search'}
    },

    libraryRoute() {
      return { name: 'Library' }
    }
  },

  methods: {
    isLinkActive(route) {
      return this.$route.path === route;
    },

    getPlaylistRoute(playlist) {
      return {
        name: 'Playlist', 
        params: { 
          id: playlist.id
        }
      };
    },

    getLinkActiveStyle(route) {
      return {
        'color': this.isLinkActive(route) ? 'white' : '#d4d4d4'
      };
    }
  }
}
</script>

<style scoped>
.spotify-sidebar {
  width: 240px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  
  background-color: #040404;
}

.logo {
  width: 75%;
  padding: 0 10px 20px;
  float: left;
}

.main-options {
  margin-bottom: 20px;
}

.playlists-options {
  padding: 0 10px;
}

.playlists-options p {
  padding: 10px 0;
  float: left;

  font-size: 10pt;
  text-transform: uppercase;
  color: white;
}

.playlists-options .btn-liked-songs {
  display: flex;
  width: 100%;
  padding: 10px 0;

  text-decoration: none;
  color: #d4d4d4;
}

.playlists-options .btn-liked-songs:hover {
  color: white;
}

.playlists-options .btn-liked-songs i {
  margin-right: 10px;
  padding: 5px;
  
  background-color: #b62dd8;
}

.playlists-options .btn-liked-songs h4 {
  height: 18px;
  align-self: center;
}

.playlists-options hr {
  width: 100%;
  height: 0.25px;
  margin: 0 0 20px;
  float: right;
}

.playlists-options .playlist-link {
  display: block;
  padding: 5px 0;

  text-align: left;
  text-decoration: none;
  color: #8d8d8d;

  cursor: default;
}

.playlist-link-active {
  color: white;
}

.playlists-options .playlist-link:hover {
  color: white;
}
</style>