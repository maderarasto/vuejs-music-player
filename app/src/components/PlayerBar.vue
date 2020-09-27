<template>
  <div class="player-bar">
    <TrackInfo />
    <PlayerControls />
    <div class="other-controls"></div>
  </div>
</template>

<script>
import TrackInfo from '@/components/TrackInfo';
import PlayerControls from '@/components/PlayerControls';

export default {
  name: 'PlayerBar',
  components: {
    TrackInfo,
    PlayerControls
  }
}
</script>

<style>
.player-bar {
  display: flex;
  width: 100%;
  height: 100px;
  padding: 0 20px;

  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  
  background-color: #303030;
}

.other-controls {
  width: 225px;
  height: 60px;
  border: 1px solid white;
}
</style>