<template>
    <div id="app">
        <Nav />
    </div>
</template>

<script>
import Api from '../api/api.js'

import Nav from '../src/components/Nav.vue'

export default {
    name: 'App',
    components: {
        Nav
    },
    created() {
        Api.getBikes();
    },
}
</script>

<style>
body {
  margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
}
</style>
