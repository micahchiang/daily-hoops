<template>
    <main>
        <header>
            <h3>{{homeTeam}} vs {{awayTeam}}</h3>
        </header>
        <section>
            <p>Score: {{homeScore}} - {{awayScore}}</p>
            <p>Status: {{status}}</p>
        </section>
    </main>
</template>

<script>
export default {
    name: "GameCard",
    props: ["gameId","homeTeam", "awayTeam", "status", "homeScore", "awayScore"],
}
</script>

<style lang="scss" scoped>
main {
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
</style>


