<template>
  <div class="spotify-player">
    <Sidebar />
    <Content />
    <PlayerBar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';
import PlayerBar from '@/components/PlayerBar';

export default {
  name: 'SpotifyPlayer',
  components: {
    Sidebar,
    Content,
    PlayerBar
  }
}
</script>

<style>
.spotify-player {
  display: flex;
}
</style>