import Vue from 'vue'

import Utils from './utils';
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$utils = Utils;

new Vue({
  render: h => h(App),
}).$mount('#app')
