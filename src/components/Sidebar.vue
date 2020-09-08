<template>
  <div class="spotify-sidebar">
    <img class="logo" src="@/assets/spotify_logo.png" alt="spotify logo" />

    <div class="main-options">
      <IconButton route="/" fa-icon="fa-home" text="Home" :active="isButtonActive('/')" />
      <IconButton route="/search" fa-icon="fa-search" text="Search" :active="isButtonActive('/search')" />
      <IconButton route="/collection" fa-icon="fa-book" text="Your Library" :active="isButtonActive('/collection')" />
    </div>

    <div class="playlists-options">
      <p>Playlists</p>
      <IconButton route="/" fa-icon="fa-heart" text="Liked Songs" />
      <hr />
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton';

export default {
  name: 'Sidebar',
  components: {
    IconButton
  },

  methods: {
    isButtonActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style>
.spotify-sidebar {
  width: 240px;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  
  
  background-color: #040404;
}

.logo {
  width: 75%;
  padding: 0 20px 20px;
  float: left;
}

.main-options {
  margin-bottom: 20px;
}

.playlists-options p {
  padding: 10px 20px;
  float: left;

  font-size: 10pt;
  text-transform: uppercase;
  color: white;
}

.playlists-options hr {
  width: 90%;
  height: 0.25px;
  float: right;
}
</style>