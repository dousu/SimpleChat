import Vue from 'vue'
import Router from 'vue-router'
import SimpleChat from '@/components/SimpleChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SimpleChat',
      component: SimpleChat
    }
  ]
})
