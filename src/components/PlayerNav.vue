<template>
  <nav class="player-nav">
    <UserDropdown :default-style="true" />
  </nav>
</template>

<script>
import UserDropdown from '@/components/UserDropdown';

export default {
  name: 'PlayerNav',
  components: {
    UserDropdown
  }
}
</script>

<style>
.player-nav {
  position: fixed;

  width: 100%;
  height: 55px;
  border-bottom: 1px solid #303030;
}
</style>