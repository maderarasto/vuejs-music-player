<template>
  <div class="album-nav">
    <div class="btn-circle">
      <i class="fas fa-play-circle icon-play"></i>
    </div>
    <i class="far fa-heart icon-like" :class="likeIconClass" />
    <div class="icon-options">
      <i v-for="i in 3" :key="i" class="fas fa-circle"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumNav",

  data() {
    return {
      savedAlbum: false
    }
  },

  computed: {
    likeIconClass() {
      return [ this.savedAlbum ? 'fas fa-heart saved' : 'far fa-heart' ];
    }
  },

  created() {
    this.$store.dispatch('checkSavedAlbum', this.$route.params.id)
        .then(saved => this.savedAlbum = saved);
  }
}
</script>

<style scoped>
.album-nav {
  display: flex;
  width: 100%;
  height: 100px;
  padding-left: 40px;

  box-sizing: border-box;
  align-items: center;
}

.album-nav .btn-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
}

.btn-circle .icon-play {
  transform: translate(-2px, -2px);
  font-size: 42pt;
  color: #2ecc71;
}

.btn-circle > .icon-play:hover {
  transform: scale(1.1) translate(-3px, -3px);
}

.album-nav .icon-like {
  margin: 0 40px;
  font-size: 24pt;
  color: gray;
}

.album-nav .icon-like.saved {
  color: #2ecc71;
}

.icon-like:hover {
  color: white;
}

.album-nav .icon-options > i {
  margin: 0 2px;
  font-size: 4pt;
  color: gray;
}

.album .icon-options:hover > i {
  color: white;
}
</style>