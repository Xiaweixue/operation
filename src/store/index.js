import Vue from 'vue'
import Vuex from 'vuex'
import meum from './modules/meum'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meum
  }
})
