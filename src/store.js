import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeData: {}
  },

  getters: {
    homeData: state => {
      return state.homeData
    }
  },

  mutations: {
    LOAD_HOME_DATA(state, payLoad) {
      state.homeData = payLoad.homeData
    }
  },

  actions: {

  }
})
