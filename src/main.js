import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from 'element-ui'
import api from '@/api/http.js';

import '@/assets/styles/reset.styl';
import '@/assets/styles/utils.styl';
import '@/assets/styles/_common.styl';
import '@/assets/styles/_videojs.styl';
import '@/assets/styles/_comment_danmu.styl';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
