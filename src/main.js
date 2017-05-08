import './plugins/toast/index.css';

import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'
import components from './components/' // 加载公共组件
import * as filters from './filters/'
import plugins from './plugins/'

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

Object.keys(plugins).forEach(key => {
  Vue.use(plugins[key]);
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
