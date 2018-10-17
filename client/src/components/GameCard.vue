<template>
    <main>
        <section 
            class="card__container"
            @click="onClick(gameId)"
        >
            <header>
                <h3>{{homeTeam}} vs {{awayTeam}}</h3>
            </header>
            <section>
                <p>Score: {{homeScore}} - {{awayScore}}</p>
                <p>Status: {{status}}</p>
            </section>
        </section>
        <div 
            class="boxscore__overlay"
            v-bind:class="{ 'boxscore__overlay-visible': isShown }"    
        >
        </div>
    </main>
</template>

<script>
export default {
    name: "GameCard",
    props: ["gameId","homeTeam", "awayTeam", "status", "homeScore", "awayScore"],
    data () {
        return {
            isShown: false
        }
    },
    methods: {
        onClick: function(gID) {
            this.isShown = true;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  width: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;

  &-visible {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
}
</style>


