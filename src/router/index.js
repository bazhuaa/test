import Vue from 'vue'
import Router from 'vue-router'
import Ebook from '@/Ebook'
import roll from '@/roll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/roll'
    },
    {
      path: '/ebook',
      name: 'Ebook',
      component: Ebook
    },
    {
      path: '/roll',
      name: 'roll',
      component: roll
    }
  ]
})
