export default class StatsAdapter {
  contructor() {}

  formatStats(playerObj) {
    for (let stat of playerObj) {
      console.log(stat, "-", playerObj.stat);
    }
  }
}
