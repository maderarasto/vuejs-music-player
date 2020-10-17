<template>
  <div class="player-body">
    <PlayerNav :show-overlay="scrollPosition.y > 5" />

    <div ref="scroll" class="scroll-container" data-simplebar>
      <div ref="content" class="player-content" @wheel="onScroll">
        <router-view :key="$route.fullPath"></router-view>
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
  },

  computed: {
    scrollPosition() {
      return this.$store.getters.scrollPosition;
    }
  },

  methods: {
    onScroll() {
      if (!this.$refs.scroll) return null;

      const track = this.$refs.scroll.querySelector('.simplebar-track.simplebar-vertical');
      const scrollbar = track.querySelector('.simplebar-scrollbar');

      let transform = scrollbar.style.transform;
      transform = transform.replace(new RegExp('^translate3d|px|[(]|[)]', 'gm'), '');
      transform = transform.split(', ').map(value => parseInt(value));

      this.$store.commit('setScrollPosition', {
        x: transform[0],
        y: transform[1],
        z: transform[2]
      });
    }
  }
}
</script>

<style>
.player-body {
  position: relative;

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