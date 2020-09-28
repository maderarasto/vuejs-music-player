<template>
  <div class="player-bar">
    <TrackInfo />
    <PlayerControls />
    <div class="other-controls">
      <i :class="volumeIconClasses" @click="onMuteClick"></i>
      <Slider v-model="volume" :width="100" />
    </div>
  </div>
</template>

<script>
import TrackInfo from '@/components/TrackInfo';
import PlayerControls from '@/components/PlayerControls';
import Slider from '@/components/Slider';

export default {
  name: 'PlayerBar',
  components: {
    TrackInfo,
    PlayerControls,
    Slider
  },

  data() {
    return {
      volume: 30,
      hover: false
    }
  },

  computed: {
    volumeIconClasses() {
          return ['fas', this.volume > 50 ? 'fa-volume-up' : this.volume > 0 ? 'fa-volume-down' : 'fa-volume-mute', 'volume-icon' ];
    }
  },

  methods: {
    onMuteClick() {
      this.volume = 0;
    }
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
  display: flex;
  width: 200px;
  height: 60px;

  align-items: center;
  justify-content: flex-end;
}

.volume-icon {
  font-size: 15px;
  color: gray;
  margin: 0 5px;
}

.volume-icon:hover {
  color: white;
}

.volume-icon:hover {
  color: white;
}
</style>