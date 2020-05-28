import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
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
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/profile',
      name: 'My profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
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
