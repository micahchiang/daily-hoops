<template>
    <main>
        <header>
            <h1>
                Today's Games
            </h1>
        </header>
        <section class="list__container">

        </section>
    </main>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "GamesList",
    computed: mapState({
        games: state => state.games
    }),
    created(){
        this.$store.dispatch('getGames');
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        margin: 0;
        font-weight: 200;
    }
</style>

