<template>
  <div class="spotify-login">
    <img class="spotify-logo" src="@/assets/spotify_logo.png" alt="spotify logo" />
    <a class="btn-login" :href="authorizeURI">Login with Spotify</a>
  </div>
</template>

<script>
export default {
  name: 'Login',

  computed: {
    authorizeURI() {
      return this.$utils.getAuthorizeURI();
    }
  }
}
</script>

<style>
.spotify-login {
  position: relative;

  width: 100%;
  height: 100%;

  background-color: #040404;
}

.spotify-login .spotify-logo {
  position: fixed;
  top: 40%;
  left: 50%;

  width: 50%;

  transform: translate(-50%, -50%);
}

.spotify-login .btn-login {
  position: fixed;
  top: 75%;
  left: 50%;

  min-width: 180px;
  padding: 20px;
  border-radius: 50px;

  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  transform: translate(-50%, -50%);

  color: white;
  background-color: #2ecc71;
}
</style>