<template>
    <div class="navBar">
        <div class="leftItems">
            <p class="backBtuuon">返回</p>
        </div>
        <div class="titleView">
            <p class="title">{{title}}</p>
        </div>
        <div class="rightItems">
            <span class="rightItem">下一页</span>
            <span class="rightItem">下一页</span>
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
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 44px;
        background-color: #efefef;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
    }
    .leftItems {
        flex: 1;
    }
    .backBtuuon {
        background-color: #ff0000;
        padding-left: 5px;
    }
    .titleView {
        flex: 1;
    }
    .title {
        flex: 1;
        text-align: center;
    }
    .rightItems {
        flex: 1;
        flex-direction: row;
    }
    .rightItem {
        background-color: aqua;
        
    }
</style>
