<template>
  <div class="user-dropdown" :style="userDropdownStyle">
    <div class="dropdown-btn">

    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDropdown',
  props: {
    defaultStyle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    userDropdownStyle() {
      const defaultStyle = {};

      if (this.defaultStyle) {
        defaultStyle.minWidth = '200px';
        defaultStyle.height = '40px';
      }

      return defaultStyle;
    }
  }
}
</script>

<style>
.user-dropdown .dropdown-btn {
  width: 100%;
  height: 100%;

  border: 1px solid #303030;
}
</style>