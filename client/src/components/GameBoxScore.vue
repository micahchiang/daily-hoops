<template>
    <main class="boxscore__container">
        <header>
            <h1>HOME VS AWAY</h1>
        </header>
    </main>
</template>

<script>
export default {
    name: "GameBoxScore"
}
</script>

<style lang="scss" scoped>
.boxscore__container {
  height: 95%;
  width: 95%;
  background-color: #ffffff;
  border-radius: 5px;
  color: #2c3550;

  header {
    h1 {
      font-weight: 100;
    }
  }
}
</style>


