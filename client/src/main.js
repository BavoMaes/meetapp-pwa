import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueSocketIO from 'vue-socket.io';
import './registerServiceWorker';
import './assets/css/reset.css';

Vue.config.productionTip = false;

// vue-socket.io
// https://www.npmjs.com/package/vue-socket.io
// Laatst geraadpleegd op 2 juni 2020
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
}));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
