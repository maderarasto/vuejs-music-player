import Vue from 'vue'
import SpotifyAPI from 'spotify-web-api-js'

import Utils from './utils';
import Store from './store';
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$utils = Utils;
Vue.prototype.$spotify = new SpotifyAPI();

new Vue({
  render: h => h(App),
  store: Store
}).$mount('#app')
