import Vue from 'vue'
import Router from 'vue-router'
import App from '@/app';
import Home from '@/pages/home/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: Home,
          meta: { auth: false }
        },
      ]
    }
  ]
})

