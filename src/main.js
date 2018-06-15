// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import test from './assets/js/common'
import $ from 'jquery'
import axios from 'axios'
import * as filters from './Filter'
import pagination from '@/components/pagination/pagination'

Vue.use(ElementUI)

Vue.prototype.$test = test
Vue.config.productionTip = false
Vue.prototype.axios = axios
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
 })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
