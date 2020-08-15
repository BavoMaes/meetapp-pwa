const authModule = {
  namespaced: true,
  state: () => ({
    authenticated: false,
    token: null,
    user: null
  }),
  getters: {
    getAuthenticated: (state) => {
      return state.authenticated
    },
    getToken: (state) => {
      return state.token
    },
    getUser: (state) => {
      return state.user
    }
  },
  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },
    setToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {}
}

export default authModule;