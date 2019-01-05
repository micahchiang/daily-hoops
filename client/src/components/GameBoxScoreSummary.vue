<template>
    <section class="scoring__summary">
        <table>
            <thead>
                <th></th>
                <th>
                    1
                </th>
                <th>
                    2
                </th>
                <th>
                    3
                </th>
                <th>
                    4
                </th>
                <th v-if="homeTeamOT1 > 0">
                    OT
                </th>
                <th v-if="homeTeamOT2 > 0">
                    OT
                </th>
                <th v-if="homeTeamOT3 > 0">
                    OT
                </th>
                <th v-if="homeTeamOT4 > 0">
                    OT
                </th>
                <th>
                    T
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>{{homeTeamName}}</td>
                    <td>{{homeTeamQ1}}</td>
                    <td>{{homeTeamQ2}}</td>
                    <td>{{homeTeamQ3}}</td>
                    <td>{{homeTeamQ4}}</td>
                    <td v-if="homeTeamOT1 > 0">{{homeTeamOT1}}</td>
                    <td v-if="homeTeamOT2 > 0">{{homeTeamOT2}}</td>
                    <td v-if="homeTeamOT3 > 0">{{homeTeamOT3}}</td>
                    <td v-if="homeTeamOT4 > 0">{{homeTeamOT4}}</td>
                    <td>{{homeTeamTotal}}</td>
                </tr>
                <tr>
                    <td>{{awayTeamName}}</td>
                    <td>{{awayTeamQ1}}</td>
                    <td>{{awayTeamQ2}}</td>
                    <td>{{awayTeamQ3}}</td>
                    <td>{{awayTeamQ4}}</td>
                    <td v-if="awayTeamOT1 > 0">{{awayTeamOT1}}</td>
                    <td v-if="awayTeamOT2 > 0">{{awayTeamOT2}}</td>
                    <td v-if="awayTeamOT3 > 0">{{awayTeamOT3}}</td>
                    <td v-if="awayTeamOT4 > 0">{{awayTeamOT4}}</td>
                    <td>{{awayTeamTotal}}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    name: "ScoringSummary",
    props: [
        "homeTeamName", "homeTeamQ1", "homeTeamQ2", "homeTeamQ3", "homeTeamQ4", 
        "homeTeamOT1", "homeTeamOT2", "homeTeamOT3", "homeTeamOT4", "homeTeamTotal",
        "awayTeamName", "awayTeamQ1", "awayTeamQ2", "awayTeamQ3", "awayTeamQ4",
        "awayTeamOT1", "awayTeamOT2", "awayTeamOT3", "awayTeamOT4", "awayTeamTotal",
    ]
    
}
</script>

<style lang="scss" scoped>
.scoring__summary {
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  font-size: 1rem;
  @media screen and (max-width: 760px) {
      margin: 0 1rem;
      font-size: .75rem;
  }
  h1 {
    font-weight: 100;
  }
  table {
    border-collapse: collapse;
    thead {
      border-bottom: 1px solid #cccccc;
    }
    th,
    td {
      padding: 1rem;
      @media screen and (max-width: 760px) {
          padding: 0.5rem;
      }
    }
  }
}
</style>


