import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies'

// 导入mock
require('./mock');

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .provide('$cookies', VueCookies)
  .provide('globalData', {
    test: '测试'
  })
  .mount('#app');
