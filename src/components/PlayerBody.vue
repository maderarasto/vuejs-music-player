<template>
  <div class="player-body">
    <PlayerNav />

    <div class="scroll-container" data-simplebar>
      <div class="player-content" >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerNav from '@/components/PlayerNav';

export default {
  name: 'PlayerBody',
  components: {
    PlayerNav
  }
}
</script>

<style>
.player-body {
  width: 100%;
  height: 100%;

  background-color: #191919;
}

.scroll-container {
  width: 100%;
  height: 100%;

  overflow: auto;  
  box-sizing: content-box;
  flex: 1;
}

.scroll-container .player-content {
  width: 100%;
  height: 100%;
  margin-right: 20px;

  box-sizing: content-box;
}

.simplebar-track.simplebar-vertical {
  width: 15px;
}

.simplebar-scrollbar::before {
  border-radius: 0;
  background-color: #8d8d8d;
}
</style>