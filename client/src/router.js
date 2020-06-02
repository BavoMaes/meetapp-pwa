import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/Info';
import Scan from './views/Scan';
import Discover from './views/Discover';
import Chat from './views/Chat';
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'My profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
