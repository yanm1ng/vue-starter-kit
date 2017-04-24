import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'
import components from './components/' // 加载公共组件
import * as filters from './filters/'

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
