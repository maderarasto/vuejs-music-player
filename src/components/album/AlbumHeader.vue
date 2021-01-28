<template>
  <div class="album-header" :style="headerStyle" @load="onLoadHeader">
    <img v-if="albumImage" ref="albumImage" :src="albumImage.url" alt="image of the album" @load="onImageLoad" />
    <div class="album-details">
      <span class="type">Album</span>
      <h1 class="album-title">{{ album.name }}</h1>
      <ul class="additional-info">
        <li v-if="albumArtist">
          <a :href="albumArtistLink">{{ albumArtist.name }}</a>
        </li>
        <li>{{ albumReleaseYear }}</li>
        <li>{{ albumTracksInformation }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumHeader",

  data() {
    return {
      backgroundColor: { r: 96, g: 96, b: 96 }
    }
  },

  computed: {
    album() {
      return this.$store.getters['album'];
    },

    albumImage() {
      return this.album && this.album.images.length > 0 ? this.album.images[0] : null;
    },

    albumArtist() {
      return this.album && this.album.artists.length > 0 ? this.album.artists[0] : null;
    },

    albumArtistLink() {
      return `artists/${this.albumArtist.id}`;
    },

    albumReleaseYear() {
      return this.album && this.album.release_date.split('-')[0];
    },

    albumTracksInformation() {
      return `${this.album.total_tracks } songs, ${this.albumTotalLength}`;
    },

    albumTotalDuration() {
      return this.album.tracks.items.reduce((total, track) => total + track.duration_ms, 0);
    },

    albumTotalLength() {
      const duration = this.$utils.parseTime(this.albumTotalDuration);

      return `${duration.hours} hr ${duration.minutes} min`;
    },

    headerStyle() {
      const destColor = {
        r: this.backgroundColor.r - 80 > 0 ? this.backgroundColor.r - 80 : 0,
        g: this.backgroundColor.g - 30 > 0 ? this.backgroundColor.g - 80 : 0,
        b: this.backgroundColor.b - 70 > 0 ? this.backgroundColor.b - 80 : 0,
      }

      return {
        background: `linear-gradient(180deg, ${this.getFormattedColor(this.backgroundColor)}, ${this.getFormattedColor(destColor)})`
      };
    }
  },

  methods: {
    getFormattedColor(color) {
      return `rgb(${color.r}, ${color.g}, ${color.b})`;
    },

    onLoadHeader() {
      console.log('ll');
      this.$emit('load');
    },

    onImageLoad() {
      this.$utils.getImageMainColor(this.$refs.albumImage).then(color => this.backgroundColor = { r: color[0], g: color[1], b: color[2]});
      this.$emit('load');
    }
  }
}
</script>

<style scoped>
.album-header {
  display: flex;
  width: 100%;
  height: 350px;
  padding-left: 40px;
  padding-bottom: 30px;
  box-sizing: border-box;

  align-items: flex-end;
  /*background: linear-gradient(#606060, #202020);*/
}

.album-header > img {
  width: 250px;
  height: 250px;
  box-shadow: -5px -5px 15px -5px #191919;
}

.album-header .album-details {
  display: flex;
  margin-left: 20px;
  flex-direction: column;
}

.album-details .type {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10pt;
  color: white;
}

.album-details .album-title {
  width: 100%;
  font-size: 36pt;
  color: white;
}

.album-details .additional-info {
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.75);
}

.additional-info li {
  margin-right: 25px;
  float: left;
}

.additional-info li > a {
  text-decoration: none;
  color: white;
}

.additional-info li > a:hover {
  text-decoration: underline;
}

.additional-info li:before {
  content: "";
  margin: 0 -3px;
}

.additional-info li:first-child {
  list-style-type: none;
  font-weight: bold;
}

.additional-info li:first-child:before {
  margin: 0;
}
</style>