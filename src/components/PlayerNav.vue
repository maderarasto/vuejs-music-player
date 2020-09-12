<template>
  <nav :class="navClasses">
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
  },

  props: {
    showOverlay: Boolean
  },

  computed: {
    navClasses() {
      return ['player-nav', this.showOverlay ? 'nav-overlay' : ''];
    }
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
  /* border: 1px solid #303030; */
}

.player-nav.nav-overlay {
  background-color: #040404;
}

.nav-left {
  padding: 0 10px 0 30px;
}

.nav-right {
  padding: 0 30px 0 10px;
}
</style>