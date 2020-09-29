<template>
  <VueSlider
    :min="min" 
    :max="max"
    :value="value"
    tooltip="none" 
    :width="width" 
    :railStyle="customRailStyle" 
    :contained="true"
    @change="onChange">
    <template v-slot:process="{ style }">
      <div :class="customSliderProcessClasses" :style="style"></div>
    </template>
    <template v-slot:dot="{ focus }">
      <div :class="['custom-dot', { focus }]"></div>
    </template>
  </VueSlider>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'

export default {
  name: 'Slider',
  components: {
    VueSlider
  },

  props: {
    value: Number,
    width: String,
    min: Number,
    max: Number
  },

  computed: {
    customRailStyle() {
      return {
        'background-color': '#4d4d4d'
      };
    },

    customSliderProcessClasses() {
      return ['custom-slider-process'];
    }
  },

  methods: {
    onChange(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style>
.vue-slider:hover .custom-slider-process {
  background-color: #2ecc71;
}

.vue-slider:active .custom-slider-process {
  background-color: #2ecc71;
}

.vue-slider:hover .custom-dot {
  display: block;
}

.vue-slider:active .custom-dot {
  display: block;
}

.custom-dot {
  display: none;
  width: 100%;
  height: 100%;
  border-radius: 50px;

  background-color: white;
}

.custom-slider-process {
  border-radius: 50px;
  background-color: gray;
}
</style>