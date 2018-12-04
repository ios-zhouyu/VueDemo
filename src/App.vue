<template>
    <div id="app">
        <NavBar/>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <TabBar/>
    </div>
</template>

<script>

    import TabBar from './components/TarBar'
    import NavBar from './components/NavBar'

    export default {
        name: 'App',
        components: {
            TabBar,
            NavBar
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
