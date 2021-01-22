<template>
  <div class="track">
    <div class="left-side">
      <img :src="albumImage.url" alt="album image of the track" />
      <span class="track-details">
        <span class="track-name">{{ track.name }}</span>
        <div class="track-artists" v-html="artists"></div>
      </span>
    </div>
    <div class="right-side">
      <i class="far fa-heart"></i>
      <span class="track-length">{{ length }}</span>
      <i class="fas fa-ellipsis-h"></i>
    </div>
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

  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}

.track:hover {
  background-color: #2f2f2f;
}

.track:hover .track-details .track-artists a {
  color: white;
}

.track .left-side, .track .right-side {
  display: flex;
}

.left-side  img {
  width: 40px;
  height: 40px;
}

.left-side .track-details {
  display: flex;
  margin-left: 20px;
  flex-direction: column;
}

.track-details .track-name {
  cursor: default;
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

.right-side .track-length {
  font-size: 10pt;
  cursor: default;
  color: gray;
}

.right-side i {
  margin: 0 10px 0 15px;
  visibility: hidden;
  color: gray;
}

.right-side i:hover {
  color: white;
}

.track:hover .right-side .track-length {
  color: white;
}

.track:hover .right-side i {
  visibility: visible;
}
</style>