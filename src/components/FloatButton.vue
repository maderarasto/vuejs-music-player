<template>
  <button class="float-button" @click="onClick">
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: "FloatButton",

  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style scoped>
.float-button {
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50px;

  background-color: whitesmoke;
}

.float-button:hover {
  transform: scale(1.1);
}

.float-button:focus {
  outline: none;
}
</style>