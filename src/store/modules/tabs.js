export default {
  namespaced: true,
  state: {
    editableTabsValue: '/home',
    editableTabs: [
      {
        title: '首页',
        name: '/home'
      }
    ]
  },
  getters: {},
  mutations: {
    getAdd(state, data) {
      let index = state.editableTabs.findIndex(
        (item) => item.name === data.name
      )
      if (index === -1) {
        state.editableTabs.push(data)
        // sessionStorage.setItem('tabs', JSON.stringify(this.editableTabs))
      }
    },
    geteditable(state, data) {
      state.editableTabsValue = data
    }
  },
  actions: {}
}
