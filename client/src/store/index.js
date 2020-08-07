import Vue from 'vue'
import Vuex from 'vuex'

import ChatModule from './chat';
import AuthModule from './auth';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat: ChatModule,
    auth: AuthModule
  }
});