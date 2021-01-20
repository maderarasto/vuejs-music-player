<template>
  <div id="app">
    <Login v-if="!token" />
    <SpotifyPlayer v-else />
  </div>
</template>

<script>
import Login from '@/components/containers/Login';
import SpotifyPlayer from '@/components/containers/MusicPlayer';

export default {
  name: 'App',
  components: {
    Login,
    SpotifyPlayer
  },

  data() {
    return {
      token: null
    }
  },

  created() {
    const hashData = this.$utils.getHashData();
    const token = hashData.access_token;
    
    if (token) {
      this.token = token;

      this.$store.dispatch('initToken', token);
      this.$store.dispatch('loadUser');
      this.$store.dispatch('loadSavedTracks');
      this.$store.dispatch('loadUserPlaylists');
      this.$store.dispatch('loadCurrentPlayingTrack');

      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;

  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
