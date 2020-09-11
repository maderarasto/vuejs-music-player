<template>
  <nav class="player-nav">
    <div class="nav-left">

    </div>
    <div class="nav-right">
      <UserDropdown />
    </div>
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  width: 100%;
  height: 60px;

  justify-content: space-between;
  align-items: center;
}

.nav-left {
  padding: 0 10px 0 30px;
}

.nav-right {
  padding: 0 30px 0 10px;
}
</style>