import Vue from 'vue';

const chatModule = {
  namespaced: true,
  state: () => ({
    messages: []
  }),
  getters: {
    getMessages: (state) => {
      return state.messages
    }
  },
  mutations: {
    initMessages(state, messages) {
      state.messages = messages
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    SOCKET_ADD_MESSAGE({commit}, message) {
      commit('addMessage', message);
    }
  }
}

export default chatModule;