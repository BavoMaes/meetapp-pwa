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
    }
  },
  actions: {

  }
}

export default chatModule;