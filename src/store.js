import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: null
  },

  getters: {
    cards: state => {
      return state.cards
    }
  },

  mutations: {
    LOAD_HOME_DATA(state, payLoad) {
      state.cards = payLoad.cards
    }
  },

  actions: {

  }
})
