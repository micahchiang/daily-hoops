<template>
    <router-link :to="`/game/${gameId}`">
        <main>
            <section 
                class="card__container"
            >
                <header>
                    <h3>{{homeTeam}} vs {{awayTeam}}</h3>
                </header>
                <section>
                    <p>Score: {{homeScore}} - {{awayScore}}</p>
                    <p>Status: {{status}}</p>
                </section>
            </section>
        </main>
    </router-link>
</template>

<script>
import GameBoxScore from "@/components/GameBoxScore.vue";

export default {
    name: "GameCard",
    components: {
        GameBoxScore
    },
    props: ["gameId","homeTeam", "awayTeam", "status", "homeScore", "awayScore"],
    data () {
        return {
            isShown: false
        }
    }
}
</script>

<style lang="scss" scoped>
.card__container {
  height: 10rem;
  margin: 0;
  padding: 1rem;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  background: rgba(112, 123, 126, 0.25);
  transition: all 200ms;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.3);

    &:active {
      transform: translateY(-2px);
      box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
    }
  }
  header {
    h3 {
      font-weight: 100;
    }
  }
}
.boxscore__overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0;
  width: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 100ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &-visible {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
}
</style>


