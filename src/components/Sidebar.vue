<template>
  <div class="spotify-sidebar">
    <img class="logo" src="@/assets/spotify_logo.png" alt="spotify logo" />
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
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
  float: left;
}
</style>