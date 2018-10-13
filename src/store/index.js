import Vue from "vue";
import Vuex from "vuex";
import StatsService from "../services/stats.services";

Vue.use(Vuex);

const stats = new StatsService();

const store = new Vuex.Store({
  store: {
    games: {}
  },
  getters: {
    games: store => store.games
  },
  actions: {
    async getGames({ commit }) {
      let res;
      try {
        res = await stats.getGames();
        commit("setGames", res);
      } catch (e) {
        console.log("error in getgames:", e);
      }
    }
  },
  mutations: {
    setGames(state, data) {
      state.games = data;
    }
  }
});

export default store;
