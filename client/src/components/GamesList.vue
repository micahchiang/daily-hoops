<template>
    <main>
        <header>
            <h1>
                Today's Games
            </h1>
        </header>
        <section class="list__container">
            <game-card
                v-for="(game, index) in games.g"
                :key = index
                v-bind:gameId = "game.gid"
                v-bind:homeTeam = "game.h.ta"
                v-bind:awayTeam = "game.v.ta"
                v-bind:status = "game.stt"
                v-bind:homeScore = "game.h.s"
                v-bind:awayScore = "game.v.s"
            ></game-card>
        </section>
    </main>
</template>

<script>
import {mapState} from 'vuex';
import GameCard from '@/components/GameCard.vue';

export default {
    name: "GamesList",
    components: {
        GameCard
    },
    computed: {
        ...mapState({
            games: state => state.games
        })
    }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 1rem 0;
  font-weight: 200;
}
.list__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
</style>

