<template>
    <div id="app">
        <router-view/>
        <TabBar/>
    </div>
</template>

<script>

    import TabBar from './components/TarBar'

    export default {
        name: 'App',
        components: {
            TabBar
        }
    }
</script>

<style>
    #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
