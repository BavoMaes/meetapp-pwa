const usersModule = {
    namespaced: true,
    state: () => ({
        users: []
    }),
    getters: {
        getUsers: (state) => {
            return state.users
        }
    },
    mutations: {
        initUsers(state, users) {
            state.users = users
        },
        addUser(state, user) {
            state.users.push(user);
        },
        removeUser(state, user) {
            let userIndex = state.users.indexOf(user);
            if (userIndex > -1) {
                state.users.splice(state.users.indexOf(user), 1);
            }
        }
    },
    actions: {}
}

export default usersModule;