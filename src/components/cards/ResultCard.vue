<template>
  <div class="result-card" @click="onClick">
    <img v-if="image" :class="{circle: type === 'artist'}" :src="image.url" alt="image of the result" />
    <i v-else class="default fas fa-user-circle fa-9x"></i>
    <div class="result-details">
      <h4 :title="result.name">{{ result.name }}</h4>
      <span v-if="type === 'artist'" class="result-type">Artist</span>
      <span v-else-if="type === 'playlist'">{{ result.owner.name }}</span>
      <span v-else class="album-artists" v-html="artists"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",

  props: {
    type: String,
    result: Object
  },

  computed: {
    image() {
      return this.result.images.length > 0 ? this.result.images[0] : null;
    },

    artists() {
      const artistsStr = this.result.artists.reduce(
          (result, artist) => result + `<a href="artists/${artist.id}">${artist.name}</a>, `
          , '');

      return artistsStr.substr(0, artistsStr.length - 2);
    }
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style>
.result-card {
  display: flex;
  width: 200px;
  height: 275px;
  padding: 15px;
  border-radius: 5px;

  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  background: #2f2f2f;
}

.result-card:hover {
  background: #4f4f4f;
}

.result-card img {
  width: 170px;
  height: 170px;
  border-radius: 3px;
}

.result-card img.circle {
  border-radius: 50%;
}

.result-card .default {
  color: gray;
}

.result-card .result-details {
  width: 100%;
  margin-top: 15px;
  align-self: flex-start;
}

.result-details h4 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
}

.result-details .result-type {
  font-size: 10pt;
  color: gray;
}

.result-details .album-artists a {
  font-size: 10pt;
  text-decoration: none;
  color: gray;
}

.result-details .album-artists a:hover {
  text-decoration: underline;
}
</style>