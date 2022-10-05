import Vue from 'vue'
import Vuex from 'vuex'
import meum from './modules/meum'
import tabs from './modules/tabs'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meum,
    tabs
  }
})
