<template>
    <div class="navBar">
        <!--<div class="leftItems">-->
            <!--<img class="backBtuuon" src="../assets/navbar/back_icon@3x.png" v-show="isBackButtonShow"/>-->
        <!--</div>-->
        <slot name="left"></slot>
        <div class="titleView">
            <p class="title">{{title}}</p>
        </div>
        <slot name="right"></slot>
        <!--<div class="rightItems">-->
            <!--<img class="rightItem" src="../assets/navbar/Action_Share_60x60_@3x.png"/>-->
            <!--<img class="rightItem" src="../assets/navbar/add_addressicon_16x16_@2x.png"/>-->
        <!--</div>-->
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
        background-color: #19A318;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #dedede;
    }
    .leftItems {
        width: 60px;
        display: flex;
        align-items: center;
    }
    .backBtuuon {
        padding-left: 8px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 30px;
        width: 10px;
        height: 17px;
    }
    .titleView {
        flex: 1;
    }
    .title {
        flex: 1;
        text-align: center;
        color: #ffffff;
    }
    .rightItems {
        width: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .rightItem {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
</style>
