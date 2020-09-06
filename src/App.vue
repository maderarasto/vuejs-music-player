<template>
  <div id="app">
    <Login v-if="!token" />
  </div>
</template>

<script>
import Login from '@/components/Login';

export default {
  name: 'App',
  components: {
    Login
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
