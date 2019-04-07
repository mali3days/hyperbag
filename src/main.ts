import Vue, { VNode } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import { store } from '@/store';

import '../config/common';

import '@/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h): VNode => h(App),
}).$mount('#app');
