<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <TabBar v-show="$route.meta.showTabBar"/>
    </div>
</template>

<script>

    import TabBar from './components/TarBar'

    export default {
        name: 'App',
        components: {
            TabBar
        },
        data() {
        	return {
		        navBarTitle: '首页'
            }
        },
        methods: {
	       
        }
    }
</script>

<style>
    #app {
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
</style>
