import axios from "axios";

export default class StatsService {
  constructor() {
    this.baseUrl =
      "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2018/scores/00_todays_scores.json";
  }

  getGames() {
    axios
      .get(this.baseUrl)
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log("an error occurred:", e);
      });
  }
}
