<template>
  <div class="spotify-sidebar">
    <img class="logo" src="@/assets/spotify_logo.png" alt="spotify logo" />

    <div class="main-options">
      <IconButton fa-icon="fa-home" text="Home" :active="true" />
      <IconButton fa-icon="fa-search" text="Search" />
      <IconButton fa-icon="fa-book" text="Your Library" />
    </div>

    <div class="playlists-options">
      <p>Playlists</p>
      <IconButton fa-icon="fa-heart" text="Liked Songs" />
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