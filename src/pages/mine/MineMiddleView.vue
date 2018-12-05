<template>
    <div class="middle">
        <div class="item">
            <div class="leftTop">
                <span class="moneyCount">{{middle.money}}</span>
                <span class="unit">元</span>
            </div>
            <span class="title">我的余额</span>
        </div>
        <div class="item">
            <div class="middleTop">
                <span class="couponsCount">{{middle.coupons}}</span>
                <span class="unit">个</span>
            </div>
            <span class="title">我的优惠</span>
        </div>
        <div class="item">
            <div class="rithtTop">
                <span class="scoreCount">{{middle.score}}</span>
                <span class="unit">分</span>
            </div>
            <span class="title">我的优惠</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "MineMiddleView",
        props: {
	        middle: Object
        }
	}
</script>

<style scoped>
    .middle {
        background-color: #ededed;
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .item {
        flex: 1;
        background-color: #ffffff;
        margin-right: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .moneyCount {
        color: #FFA500;
        font-size: 18px;
    }
    .couponsCount {
         color: #FF0000;
         font-size: 18px;
    }
    .scoreCount {
        color: #3CB371;
        font-size: 18px;
    }
    .unit {
        color: #999999;
        font-size: 10px;
    }
    .title {
        color: #999999;
        font-size: 10px;
    }
</style>
