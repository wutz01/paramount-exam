import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import store from '@/store'
import Notifications from './components/Common/Notification'
import { BootstrapVue } from 'bootstrap-vue'
import GlobalMixins from '@/mixins'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export const bus = new Vue()
let http = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  timeout: 1000 * 60 * 3
})

http.interceptors.request.use(config => {
  config.headers = {
    Accept: 'application/json',
    // 'Content-Type': 'application/json',
    'x-rapidapi-key': 'a53fbf3983msh2e341ef91193465p10cc2djsn6a6fb9cf3a8d',
    'x-rapidapi-host': 'free-nba.p.rapidapi.com',
    'useQueryString': true
  }

  return config
})
Vue.config.productionTip = false
Vue.http = http
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.mixin(GlobalMixins)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
