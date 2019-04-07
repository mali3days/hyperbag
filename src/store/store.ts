import Vue from 'vue';
import Vuex from 'vuex';

import { url } from '@/store/modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
  modules: {
    url,
  },
  /**
   * Enable strict mode
   * https://vuex.vuejs.org/guide/strict.html
   */
  strict: debug,
});
