import axios from "axios";

export default class StatsService {
  constructor() {
    this.baseUrl = "http://localhost:3000/";
  }

  getGames() {
    axios
      .get(this.baseUrl + "games", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log("an error occurred:", e);
      });
  }
}
