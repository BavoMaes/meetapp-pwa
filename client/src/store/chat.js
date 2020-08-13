const chatModule = {
  namespaced: true,
  state: () => ({
    messages: []
  }),
  getters: {
    getConversation: (state) => (id) => {
      return Object.values(state.messages).filter(message => message.matchId == id);
    }
  },
  mutations: {
    initMessages(state, payload) {
      payload.map(message => {
        state.messages.push(message);
      })
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