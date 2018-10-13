import axios from "axios";

export default class StatsService {
  constructor() {
    this.baseUrl = "http://localhost:3000/";
  }

  getGames() {
    return new Promise((resolve, reject) => {
      axios
        .get(this.baseUrl + "games", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}
