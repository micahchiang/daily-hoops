<template>
    <main 
        class="boxscore__container"
        v-if="Object.keys(boxScore).length > 0"
    >
        <aside>
            <header>
                <section class="home__team">
                    <h1>{{ boxScore.g.hls.tc }} {{ boxScore.g.hls.tn }}</h1>
                    <h1>{{ boxScore.g.hls.s }}</h1>
                </section>
                <section class="header__vs">
                    <h1>{{ boxScore.g.stt}}</h1>
                </section>
                <section class="away__team">
                    <h1>{{ boxScore.g.vls.tc }} {{ boxScore.g.vls.tn }}</h1>
                    <h1>{{ boxScore.g.vls.s }}</h1>
                </section>
            </header>
            <scoring-summary
                v-bind:homeTeamName="boxScore.g.hls.ta"
                v-bind:homeTeamQ1="boxScore.g.hls.q1"
                v-bind:homeTeamQ2="boxScore.g.hls.q2"
                v-bind:homeTeamQ3="boxScore.g.hls.q3"
                v-bind:homeTeamQ4="boxScore.g.hls.q4"
                v-bind:homeTeamTotal="boxScore.g.hls.s"
                v-bind:awayTeamName="boxScore.g.vls.ta"
                v-bind:awayTeamQ1="boxScore.g.vls.q1"
                v-bind:awayTeamQ2="boxScore.g.vls.q2"
                v-bind:awayTeamQ3="boxScore.g.vls.q3"
                v-bind:awayTeamQ4="boxScore.g.vls.q4"
                v-bind:awayTeamTotal="boxScore.g.vls.s"
            ></scoring-summary>
        </aside>
        <!-- <section class="team__boxscore">
            <table>
                <thead>
                    <th v-for="(cat,index) in statCategories" :key=index>
                        {{cat}}
                    </th>
                </thead>
            </table>
            <table>
                <thead>
                    <th v-for="(cat,index) in statCategories" :key=index>
                        {{cat}}
                    </th>
                </thead>
            </table>
        </section> -->
    </main>
</template>

<script>
import {mapState} from 'vuex';
import ScoringSummary from '@/components/GameBoxScoreSummary.vue';

export default {
    name: "GameBoxScore",
    components: {
        ScoringSummary
    },
    computed: {
        ...mapState({
            boxScore: state => state.boxScore
        })
    },
    data() {
        return {
            statCategories: ["PLAYER","MIN","FG","3PT","FT","OREB","DREB","REB","AST","STL","BLK","TO","PF","+/-","PTS"]
        }
    }
}
</script>

<style lang="scss" scoped>
.boxscore__container {
  height: 95%;
  width: 95%;
  background-color: #ffffff;
  border-radius: 5px;
  color: #2c3550;
  display: flex;
  align-items: center;

  aside {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
    height: inherit;
    padding: 2rem;
    header {
        display: flex;
        .header__vs {
            margin: 0 2rem;
        }
        h1 {
        font-weight: 400;
        font-size: 1.5rem;
        }
    }
  }
}

.team__boxscore {
    display: flex;
    align-items: center;
    justify-content: space-between;

    table {
        border-collapse: collapse;
        border: 1px solid #cccccc;
        margin:0 .5rem;
        thead {
            th {
                font-size: 0.85rem;
                font-weight: 600;
            }
        }
        th,td {
            padding: 0.15rem;
        }
    }
}
</style>


