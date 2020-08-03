import Vue from 'vue'
import Vuex from 'vuex'

import ChatModule from './chat';
import ConnectionModule from './connection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat: ChatModule,
    connection: ConnectionModule
  }
});