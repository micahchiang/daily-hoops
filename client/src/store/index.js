import Vue from "vue";
import Vuex from "vuex";
import StatsService from "../services/stats.services";

Vue.use(Vuex);

const stats = new StatsService();

const store = new Vuex.Store({
  state: {
    games: {},
    boxScore: {}
  },
  getters: {
    games: state => state.games
  },
  actions: {
    async getGames({ commit }) {
      try {
        let res = await stats.getGames();
        commit("setGames", res.data.gs);
      } catch (e) {
        console.log("error in getGames:", e);
      }
    },
    async getBoxScore({ commit }, gameId) {
      try {
        let res = await stats.getBoxScore(gameId);
        commit("setBoxScore", res.data);
      } catch (e) {
        console.log("an error occurred:", e);
      }
    },
    clearBoxScore({ commit }) {
      commit("clearScore");
    }
  },
  mutations: {
    setGames(state, data) {
      state.games = data;
    },
    setBoxScore(state, data) {
      state.boxScore = data;
    },
    clearScore(state) {
      state.boxScore = {};
    }
  }
});

export default store;
