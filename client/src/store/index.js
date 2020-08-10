import Vue from 'vue'
import Vuex from 'vuex'

import ChatModule from './chat';
import AuthModule from './auth';
import MatchesModule from './matches';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat: ChatModule,
    auth: AuthModule,
    matches: MatchesModule
  }
});