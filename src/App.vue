<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <TabBar @selectedTab="selectedTab"/>
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
	        selectedTab(title) {
		        this.navBarTitle = title
	        }
        }
    }
</script>

<style>
    #app {
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
