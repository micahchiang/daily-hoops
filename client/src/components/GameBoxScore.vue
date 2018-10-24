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
                <section class="away__team">
                    <h1>{{ boxScore.g.vls.tc }} {{ boxScore.g.vls.tn }}</h1>
                    <h1>{{ boxScore.g.vls.s }}</h1>
                </section>
            </header>
        </aside>
        <section class="team__boxscore">
            <div class="team__boxscore__table">
                <div class="team__boxscore__table__header">
                    <div 
                        class="team__boxscore__table__header-cat"
                        v-for="(cat, index) in statCategories"
                        :key="index"
                    >
                        {{cat}}
                    </div>
                </div>
                <div class="team__boxscore__table__body">

                </div>
            </div>
        </section>
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
            statCategories: ["PLAYER","MIN","FG","3PT","FT","OREB","DREB","REB","AST","STL","BLK","TO","PF","+/-","PTS"],
        }
    }
}
</script>

<style lang="scss" scoped>
.boxscore__container {
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      .header__vs {
        margin: 0 2rem;
      }
      h1 {
        font-weight: 400;
        font-size: 1.2rem;
      }
    }
  }
}

.team__boxscore {
  display: flex;
  height: inherit;
  width: 100%;
  align-items: center;
  justify-content: center;
  .team__boxscore__table {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    &__header {
      display: flex;
      width: 100%;
      //   align-items: center;
      justify-content: space-between;
    }
  }
}
</style>


