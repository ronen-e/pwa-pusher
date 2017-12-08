import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
