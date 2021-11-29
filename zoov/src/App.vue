<template>
    <div id="app">
        <Nav />
        <Main />
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Main from '@/components/Main.vue'

export default {
    name: 'App',
    components: {
        Nav,
        Main
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
}
</style>
