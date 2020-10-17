import Vue from 'vue';
import 'simplebar';

import 'simplebar/dist/simplebar.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './directives';
import Utils from './utils';
import Store from './store';
import Router from './router';
import App from './App';

Vue.config.productionTip = false
Vue.prototype.$utils = Utils;

new Vue({
  render: h => h(App),
  store: Store,
  router: Router
}).$mount('#app')
