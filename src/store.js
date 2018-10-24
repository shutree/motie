import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: null,
    cardsNeedButton: [
      { cardName: 'goldLeague', buttonText: '更多参赛作品>'},
      { cardName: 'mainBooks', buttonText: '更多参赛作品>2'},
      { cardName: 'finishedBooks', buttonText: '更多参赛作品>3'}
    ]
  },

  getters: {
    cards: state => state.cards,
    cardsNeedButton: state => state.cardsNeedButton
  },

  mutations: {
    LOAD_HOME_DATA(state, payLoad) {
      state.cards = payLoad.cards
    }
  },

  actions: {

  }
})
