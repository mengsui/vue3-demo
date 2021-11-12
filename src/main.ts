import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import requestConfig from './service/requestConfig';
import VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies'

// 导入mock
require('./mock');

const app = createApp(App);

app.use(store)
  .use(router)
  .use(VueAxios, requestConfig)
  .provide('axios', app.config.globalProperties.axios)
  .provide('$cookies', VueCookies)
  .provide('globalData', {
    test: '测试'
  })
  .mount('#app');
