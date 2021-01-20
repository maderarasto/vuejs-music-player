<template>
  <div class="track">
    <div style="display: flex">
      <img :src="albumImage.url" alt="album image of the track" />
      <span class="track-details">
        <span class="track-name">{{ track.name }}</span>
        <div class="track-artists" v-html="artists"></div>
      </span>
    </div>
    <span class="track-length">{{ length }}</span>
  </div>
</template>

<script>
export default {
  name: "Track",

  props: {
    track: Object
  },

  computed: {
    albumImage() {
      return this.track.album.images.length > 0 ? this.track.album.images[0] : null;
    },

    artists() {
      const artistsStr = this.track.artists.reduce(
          (result, artist) => result + `<a href="artists/${artist.id}">${artist.name}</a>, `
          , '');

      return artistsStr.substr(0, artistsStr.length - 2);
    },

    duration() {
      return this.track ? this.$utils.parseTime(this.track.duration) :
          { hours: 0, minutes: 0, seconds: 0 };
    },

    length() {
      const seconds = this.$utils.formatNumber(this.duration.seconds, '.', '', 2);

      return `${this.duration.minutes}:${seconds}`;
    }
  }
}
</script>

<style>
.track {
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  border-radius: 5px;

  justify-content: space-between;
  align-items: center;
}

.track:hover {
  background-color: #2f2f2f;
}

.track:hover .track-details .track-artists a {
  color: white;
}

.track img {
  width: 40px;
  height: 40px;
}

.track .track-details {
  display: flex;
  margin-left: 20px;
  flex-direction: column;
}

.track-details .track-name {
  color: white;
}

.track-details .track-artists a {
  font-size: 11pt;
  text-decoration: none;
  color: gray;
}

.track-details .track-artists a:hover {
  text-decoration: underline;
}

.track .track-length {
  color: gray;
}
</style>