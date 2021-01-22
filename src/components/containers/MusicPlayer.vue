<template>
  <div class="music-player">
    <div class="container">
      <Sidebar />
      <PlayerBody />
    </div>

    <PlayerBar />
  </div>
</template>

<script>
import Sidebar from '@/components/containers/Sidebar';
import PlayerBody from '@/components/player/PlayerBody';
import PlayerBar from '@/components/player/PlayerBar';

export default {
  name: 'MusicPlayer',
  components: {
    Sidebar,
    PlayerBody,
    PlayerBar
  },

  created() {
    this.$store.dispatch('loadCategories');
  }
}
</script>

<style>
.music-player {
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
}

.container {
  display: flex;
  width: 100%;
  flex: 1;

  overflow: hidden;
}
</style>