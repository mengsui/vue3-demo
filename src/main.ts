import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies'

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .provide('$cookies', VueCookies)
  .mount('#app')

