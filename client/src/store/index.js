import Vue from "vue";
import Vuex from "vuex";
import StatsService from "../services/stats.services";
import StatsAdapter from "../utilities/stats.adapter";

Vue.use(Vuex);

// const dummyGames = require('../../public/dummy-data.json');
// const dummyBox = require("../../public/boxscore-sampledata.json");

const stats = new StatsService();
const statsAdapter = new StatsAdapter();

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
        // let res = await require("../../public/boxscore-sampledata.json");
        let res = await stats.getBoxScore(gameId);
        commit("setBoxScore", res.data);
        // statsAdapter.formatStats(res.g.vls.pstsg);
        // commit("setBoxScore", res);
      } catch (e) {
        console.log("an error occurred:", e);
      }
    }
  },
  mutations: {
    setGames(state, data) {
      state.games = data;
    },
    setBoxScore(state, data) {
      state.boxScore = data;
    }
  }
});

export default store;
