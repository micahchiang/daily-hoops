import Vue from "vue";
import Vuex from "vuex";
import StatsService from "../services/stats.services";

Vue.use(Vuex);

// const dummyGames = require('../../public/dummy-data.json');
// const dummyBox = require("../../public/boxscore-sampledata.json");

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
      console.log("getBoxScore", gameId);
      try {
        let res = await require("../../public/boxscore-sampledata.json");
        // commit("setBoxScore", res.data);
        // let res = await stats.getBoxScore(gameId);
        commit("setBoxScore", res);
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
