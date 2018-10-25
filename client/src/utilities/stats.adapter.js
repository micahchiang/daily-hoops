export default class StatsAdapter {
  contructor() {}

  formatStats(playerObj) {
    console.log("in adapter", playerObj);
    for (let stat of playerObj) {
      console.log(stat, "-", playerObj.stat);
    }
  }
}
