import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  animeList: []
}

const mutations = {
  saveAnime(state, anime) {
    state.animeList = anime
  }
}

const actions = {
  addAnime({ commit }, anime) {
    let myAnimeList = [...state.animeList, anime]
    commit('saveAnime', myAnimeList)
  }
}

const getters = {
  animeList: (state) => state.animeList,

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})