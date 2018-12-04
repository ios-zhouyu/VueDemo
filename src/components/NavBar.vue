<template>
    <div class="navBar">
        <div class="leftItem">
        
        </div>
        <div class="titleView">
            <span></span>
        </div>
        <div class="rightItem">
        
        </div>
    </div>
</template>

<script>
	export default {
		name: "NavBar",
        props: {
			title: String
        }
	}
</script>

<style scoped>
    .navBar {
        height: 44px;
        background-color: #efefef;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
    }
</style>
