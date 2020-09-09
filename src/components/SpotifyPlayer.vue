<template>
  <div class="spotify-player">
    <Sidebar />
    <PlayerBody />
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
}
</style>