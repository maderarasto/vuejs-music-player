<template>
  <div class="spotify-player">
    <div class="container">
      <Sidebar />
      <PlayerBody />
    </div>

    <PlayerBar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import PlayerBody from '@/components/PlayerBody';
import PlayerBar from '@/components/PlayerBar';

export default {
  name: 'SpotifyPlayer',
  components: {
    Sidebar,
    PlayerBody,
    PlayerBar
  }
}
</script>

<style>
.spotify-player {
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