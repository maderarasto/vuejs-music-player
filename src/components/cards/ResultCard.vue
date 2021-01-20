<template>
  <div class="result-card">
    <img v-if="image" :src="image.url" alt="image of the result" />
    <div class="result-details">
      <h4>{{ result.name }}</h4>
      <span v-if="type === 'artist'" class="result-type">Artist</span>
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
    }
  }
}
</script>

<style scoped>
.result-card {
  display: flex;
  width: 180px;
  height: 275px;
  padding: 15px;
  border-radius: 5px;

  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  background: #1f1f1f;
}

.result-card:hover {
  background: #2f2f2f;
}

.result-card img {
  width: 150px;
  height: 150px;
  border-radius: 15px;
}

.result-card .result-details {
  margin-top: 15px;
  align-self: flex-start;
}

.result-details h4 {
  color: white;
}

.result-details .result-type {
  font-size: 10pt;
  color: gray;
}
</style>