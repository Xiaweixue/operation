export default {
  namespaced: true,
  state: {
    flag: false
  },
  getters: {
    status(state) {
      return state.flag
    }
  },
  mutations: {
    Changestatus(state) {
      // console.log(state.flag);
      state.flag = !state.flag
    }
  },
  actions: {}
}
