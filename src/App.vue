<template>
    <div id="app">
        <NavBar :title="navBarTitle" :isBackButtonShow="false"/>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <TabBar @selectedTab="selectedTab"/>
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
