<template>
  <div class="track-info">
    <img v-if="playedTrack" class="album-image" :src="albumImage.url" />
    <div v-if="playedTrack" class="info">
      <a href="#" class="track-title">{{ title }}</a>
      <span class="track-artists" v-html="artists"></span>
    </div>
    <div v-if="playedTrack" class="buttons">
      <a href="#"><i class="far fa-heart"></i></a>
      <a href="#"><i class="fas fa-window-restore"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackInfo',

  computed: {
    playedTrack() {
      return this.$store.getters.playedTrack;
    },

    albumImage() {
      return this.playedTrack ? this.playedTrack.album.images[0] : null;
    },

    title() {
      return this.playedTrack ? this.playedTrack.name : '';
    },

    artists() {
      let artists = this.playedTrack ? this.playedTrack.artists : [];
      artists = artists.map(artist => `<a href="#">${artist.name}</a>`);
      
      return artists.join(', ');
    }
  }
}
</script>

<style>
.track-info {
  display: flex;
  width: 380px;
  height: 60px;

  align-items: center;
}

.track-info .album-image {
  width: 60px;
  height: 60px;
}

.track-info .info {
  width: 240px;
  height: 40px;
  padding-left: 20px;
  box-sizing: border-box;
  text-align: left;
}

.track-info .info > a {
  display: block;
  height: 20px;
  text-decoration: none;
}

.track-info .info > a:hover {
  text-decoration: underline;
}

.track-info .info .track-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 12pt;
  font-weight: 500;
  color: white;
}

.track-info .info .track-artists {
  display: block;

  font-size: 10pt;
  color: darkgray;
}

.track-info .info .track-artists > a {
  color: darkgray;
  text-decoration: none;
}

.track-info .info .track-artists > a:hover {
  text-decoration: underline;
}

.track-info .buttons {
  display: flex;
  width: 80px;
  height: 40px;
  align-items: center;
}

.track-info .buttons > a {
  padding: 5px;
  margin: 6px;
}

.track-info .buttons i {
  font-size: 18px;
  color: #d4d4d4;
}

.track-info .buttons i:hover {
  color: white;
}
</style>