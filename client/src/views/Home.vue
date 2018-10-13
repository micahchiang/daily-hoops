<template>
  <div class="home">
    <games-list></games-list>
  </div>
</template>

<script>
// @ is an alias to /src
import GamesList from "@/components/GamesList.vue";

export default {
  name: "home",
  components: {
    GamesList
  },
  created(){
        this.$store.dispatch('getGames');
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
}
</style>

