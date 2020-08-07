import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';
import Register from './views/register/Register';
import store from './store/index';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/info'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'My profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('./views/Info.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/scan',
      name: 'Scan',
      component: () => import('./views/Scan.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/discover',
      name: 'Discover',
      component: () => import('./views/Discover.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat',
      name: 'ChatList',
      component: () => import('./views/chat/ChatList.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/conversation',
      name: 'Conversation',
      component: () => import('./views/chat/Chat.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.auth.authenticated) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
    next();
  } else {
    next();
  }
});

 export default router;