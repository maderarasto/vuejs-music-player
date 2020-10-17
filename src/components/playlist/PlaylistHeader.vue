<template>
  <div :class="['playlist-header', likedSongs ? 'liked-songs' : '']">
    <div class="content">
      <div class="playlist-image">
        <img v-if="image" :src="image.url" />
        <div class="liked-songs" v-else>
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div class="playlist-info">
        <span class="playlist-type">Playlist</span>
        <h2 class="playlist-title">{{ title }}</h2>
        <p v-if="description" class="playlist-description">{{ description }}</p>
        <ul class="additional-info">
          <li class="playlist-author">{{ getAuthorName() }}</li>
          <li v-if="followers" class="playlist-likes">{{ $utils.formatNumber(followers) }} likes</li>
          <li class="playlist-length">{{ length }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistHeader',
  
  props: {
    playlist: Object,
    likedSongs: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    image() {
      return this.playlist && this.playlist.images ? this.playlist.images[0] : '';
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
      return this.playlist && this.playlist.followers ? this.playlist.followers.total : 0;
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
      return this.author ? this.author.id === this.user.id : false;
    }
  },

  methods: {
    getAuthorName() {
      return this.author ? this.author.display_name : '';
    }
  }
}
</script>

<style>
.playlist-header{
  position: relative;

  width: 100%;
  height: 400px;

  background: linear-gradient(#606060, #202020);
}

.playlist-header.liked-songs {
  background: linear-gradient(#b62dd8, #202020);
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

.playlist-header .content .playlist-image .liked-songs {
  display: flex;
  width: 225px;
  height: 225px;

  justify-content: center;
  align-items: center;

  background-color: #b62dd8;
}

.playlist-header .content .playlist-image .liked-songs > i {
  font-size: 100px;
  color: white;
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