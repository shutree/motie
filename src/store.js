import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeCardsData: { }
  },

  getters: {
    homeCardsData: state => {
      return state.homeCardsData
    }
  },

  mutations: {
    LOAD_HOME_DATA(state, payLoad) {
      state.homeCardsData = payLoad.homeCardsData
    }
  },

  actions: {

  }
})
