<template>
  <div class="player-controls">
    <div class="actions">
      <PlayerAction icon-type="solid" fa-icon="fa-random" unit-size="20px" toggleable />
      <PlayerAction icon-type="solid" fa-icon="fa-step-backward" unit-size="20px" />
      <PlayerAction icon-type="regular" fa-icon="fa-play-circle" unit-size="40px" />
      <PlayerAction icon-type="solid" fa-icon="fa-step-forward" unit-size="20px" />
      <PlayerAction icon-type="solid" fa-icon="fa-retweet" unit-size="20px" toggleable />
    </div>
    <div class="progress-bar">
      <span class='progress-current'>{{ trackFormattedPosition }}</span>
      <Slider :min="0" :max="trackDurationInSeconds" v-model="trackPosition" width="100%" />
      <span class="progress-end">{{ this.trackLength }}</span>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider';
import PlayerAction from '@/components/player/PlayerAction';

export default {
  name: 'PlayerControls',
  components: {
    Slider,
    PlayerAction
  },

  data() {
    return {
      trackPosition: 0
    }
  },

  computed: {
    track() {
      return this.$store.getters.playedTrack;
    },

    trackFormattedPosition() {
      const parsedPosition = this.$utils.parseTime(this.trackPosition * 1000);
      const formattedSeconds = this.$utils.formatNumber(parsedPosition.seconds, '.', '', 2);

      return `${parsedPosition.minutes}:${formattedSeconds}`;
    },

    trackDurationInSeconds() {
      return this.track ? Math.ceil(this.track.duration_ms / 1000) : 0;
    },

    trackDuration() {
      return this.track ? this.$utils.parseTime(this.track.duration_ms) : 
        { hours: 0, minutes: 0, seconds: 0 };
    },

    trackLength() {
      const formattedSeconds = this.$utils.formatNumber(this.trackDuration.seconds, '.', '', 2);

      return this.track ? `${this.trackDuration.minutes}:${formattedSeconds}` : '0:00';
    }
  }
}
</script>

<style>
.player-controls {
  width: 800px;
  height: 60px;  
}

.player-controls .actions {
  display: flex;
  width: 100%;
  height: 50%;

  justify-content: center;
  align-items: center;
}

.player-controls .actions .player-action {
  margin: 5px 15px;
}

.player-controls .progress-bar {
  display: flex;
  width: 100%;
  height: 50%;

  align-items: flex-end;
}

.player-controls .progress-bar > span {
  font-size: 10pt;
  color: gray;
}
</style>