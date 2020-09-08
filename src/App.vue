<template>
  <div id="app">
    <Login v-if="!token" />
    <SpotifyPlayer v-else />
  </div>
</template>

<script>
import Login from '@/components/Login';
import SpotifyPlayer from '@/components/SpotifyPlayer';

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
    console.log(hashData);
    if (token) {
      this.token = token;

      this.$spotify.setAccessToken(token);
      this.$spotify.getMe().then(user => this.$store.commit('setUser', user));
      this.$spotify.getUserPlaylists().then(playlists => this.$store.commit('setPlaylists', playlists.items));
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
