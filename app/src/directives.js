import Vue from 'vue';

let onOutsideClick;

Vue.directive('click-outside', {
  bind(el, binding) {
    onOutsideClick = (event) => {
      const {exclude, handler} = binding.value;

      if (!event.target.closest(exclude))
        handler();
    }

    document.body.addEventListener('click', onOutsideClick);
  },

  unbind() {
    document.body.removeEventListener('click', onOutsideClick);
  },
});