export default {
  state: {
    username: 'wutz',
    teams: null
  },
  getters: {
    getUsername: state => state.username,
    getTeams: state => state.teams
  },
  actions: {
    updateUser: ({ commit }, username) => commit('setUsername', username),
    setTeams: ({ commit }, obj) => commit('setTeams', obj)
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    },

    setTeams (state, payload) {
      state.teams = payload
    }
  }
}
