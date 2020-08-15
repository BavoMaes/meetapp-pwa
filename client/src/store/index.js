import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router';
import ChatModule from './chat';
import AuthModule from './auth';
import MatchesModule from './matches';

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    SOCKET_authenticated({commit}, data) {
        commit('auth/setUser', data.user);
        commit('matches/initMatches', data.matches);
        commit('chat/initMessages', data.messages);
        commit('auth/setAuthenticated', true);
        router.push('/info');
      },
      SOCKET_unauthorized({commit}, data) {
        console.error(data);
        commit('auth/setAuthenticated', false);
        commit('auth/setToken', null);
        router.push('/login');
      }
  },
  modules: {
    chat: ChatModule,
    auth: AuthModule,
    matches: MatchesModule
  }
});