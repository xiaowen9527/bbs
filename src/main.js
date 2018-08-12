// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'


import fastClick from 'fastclick'//解决点击事件延迟300
fastClick.attach(document.body)

import axios from 'axios'
Vue.prototype.$axios = axios


import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
