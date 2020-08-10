const matchesModule = {
  namespaced: true,
  state: () => ({
    matches: []
  }),
  getters: {
    getMatches: (state) => {
      return state.matches
    }
  },
  mutations: {
    initMatches(state, matches) {
      state.matches = matches
    },
    addMatch(state, match) {
      state.matches.push(match);
    }
  },
  actions: {
  }
}

export default matchesModule;