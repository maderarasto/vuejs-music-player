<template>
  <div class="player-content">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style>
.player-content {
  height: 100vh;
  flex: 1;

  background-color: #191919;
}
</style>