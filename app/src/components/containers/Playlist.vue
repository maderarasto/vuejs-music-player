<template>
  <div class="playlist">
    <div class="playlist-header">
      <div class="content">
        <div class="playlist-image">
          <img v-if="image" :src="image.url" />
        </div>
        <div class="playlist-info">
          <span class="playlist-type">Playlist</span>
          <h2 class="playlist-title">{{ title }}</h2>
          <p v-if="description" class="playlist-description">{{ description }}</p>
          <ul class="additional-info">
            <li class="playlist-author">{{ author.display_name }}</li>
            <li v-if="followers" class="playlist-likes">{{ $utils.formatNumber(followers) }} likes</li>
            <li class="playlist-length">{{ length }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="playlist-body">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlist',

  data() {
    return {
      playlist: null
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    image() {
      return this.playlist ? this.playlist.images[0] : '';
    },

    title() {
      return this.playlist ? this.playlist.name : '';
    },

    description() {
      return this.playlist ? this.playlist.description : '';
    },

    author() {
      return this.playlist ? this.playlist.owner : '';
    },

    followers() {
      return this.playlist ? this.playlist.followers.total : 0;
    },

    duration() {
      return this.playlist ? this.playlist.tracks.items.reduce((initial, item) => {
        initial += item.track.duration_ms;

        return initial;
      }, 0) : 0;
    },

    length() {
      const duration = this.$utils.parseTime(this.duration);
      
      const hours = duration.hours ? `${duration.hours} hr` : ''
      const minutes = duration.minutes ? `${duration.minutes} min` : '';
      const seconds = duration.seconds ? `${duration.seconds} sec`  : '';

      return hours ? `${hours} ${minutes}` : minutes ? `${minutes} ${seconds}` : seconds;
    },

    owner() {
      return this.author.id === this.user.id;
    }
  },

  created() {
    const playlistId = this.$route.params.id;
    this.$spotify.getPlaylist(playlistId).then(playlist => this.playlist = playlist);
  }
}
</script>

<style>
.playlist {
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
}

.playlist-header{
  position: relative;

  width: 100%;
  height: 400px;
  background: linear-gradient(#606060, #202020);
}

.playlist-header .content {
  position: absolute;
  left: 40px;
  bottom: 30px;

  height: 225px;
}

.playlist-header .content .playlist-image {
  display: block;
  width: 225px;
  float: left;
}

.playlist-header .content .playlist-image > img{
  width: 100%;
  height: 100%;
}

.playlist-header .content .playlist-info {
  display: flex;
  min-width: 600px;
  height: 225px;
  margin-left: 40px;
  float: right;

  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  color: #8d8d8d;
}

.playlist-info .additional-info {
  padding: 10px 0 0;
}

.playlist-info .additional-info li {
  display: inline;
  padding-left: 10px;
  list-style: none;
}

.playlist-info .additional-info .playlist-author {
  padding-left: 0;
  font-weight: bold;
  color: white;
}

.playlist-info .additional-info li::before {
  content: '\2022';
  margin-right: 10px;
}

.playlist-info .additional-info .playlist-author::before {
  content: '';
  margin-right: 0;
}

.playlist-info .playlist-description {
  margin: 10px 0 0;
}

.playlist-info .playlist-title {
  margin-bottom: 10px;
  font-size: 48pt;
  color: white;
}

.playlist-info .playlist-type {
  margin-bottom: 30px;

  font-weight: bold;
  text-transform: uppercase;
  color: white;
}
</style>