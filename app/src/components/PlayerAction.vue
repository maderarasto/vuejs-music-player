<template>
  <div :class="actionClasses" @click="onClick">
    <i :class="iconClasses" :style="iconStyle"></i>
    <i v-if="toggled" class="fas fa-circle toggle"></i>
  </div>
</template>

<script>
export default {
  name: 'PlayerAction',

  props: {
    faIcon: String,
    iconType: String,
    unitSize: String,
    toggleable: Boolean
  },

  data() {
    return {
      toggled: false
    }
  },

  computed: {
    actionClasses() {
      return ['player-action', this.toggled ? 'toggled' : ''];
    },

    faIconType() {
      let iconType = 'fa';

      if (this.iconType == 'solid')
        iconType += 's';
      else if (this.iconType == 'regular')
      iconType += 'r';
      else if (this.iconType == 'brand')
        iconType += 'b';

      return iconType;
    },

    iconClasses() {
      return [ this.faIconType, this.faIcon ];
    },

    iconStyle() {
      return {
        'font-size': this.unitSize ? this.unitSize : '12pt'
      }
    }
  },

  methods: {
    onClick(e) {
      if (this.toggleable)
        this.toggled = !this.toggled;

      this.$emit('click', e);
    }
  }
}
</script>

<style>
.player-action {
  position: relative;
  color: #4d4d4d;
}

.player-action.toggled {
  color: #2ecc70af;
}

.player-action:hover {
  color: white;
}

.player-action.toggled:hover {
  color: #2ecc70ff;
}

.player-action .toggle {
  position: absolute;
  bottom: -10px;
  left: 50%;
  font-size: 5px;

  transform: translateX(-50%);
}
</style>