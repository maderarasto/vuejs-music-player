<template>
  <div class="player-body">
    <PlayerNav />
    <router-view class="content">
    </router-view>
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
  height: 100vh;
  flex: 1;

  background-color: #191919;
}
</style>