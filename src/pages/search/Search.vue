<template>
    <div class="search">
        <NavBar title="搜索">
            <div class="leftItems" slot="left">
                <!--<img class="backBtuuon" src="../../assets/navbar/back_icon@3x.png"/>-->
            </div>
            <div class="rightItems"slot="right" >
                <!--<img class="rightItem" src="../../assets/navbar/Action_Share_60x60_@3x.png"/>-->
                <!--<img class="rightItem" src="../../assets/navbar/add_addressicon_16x16_@2x.png"/>-->
            </div>
        </NavBar>
    </div>
</template>

<script>
	import NavBar from '../../components/NavBar'
    export default {
        name: "Search",
	    components: {
		    NavBar
	    }
    }
</script>

<style scoped>
    .search {
        width: 100%;
    }
</style>
