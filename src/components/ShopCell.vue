<template>
    <div class="cell">
        <div class="left">
            <img class="img" :src="require('../assets/shop/' + item.img)">
        </div>
        <div class="middle">
            <div class="middleTitle">
                <span class="brand">{{item.brand}}</span>
                <span class="title">{{item.title}}</span>
            </div>
            <div class="middleScore">
                <span class="score">{{item.score}}</span>
                <span class="sales">月售{{item.sales}}件</span>
            </div>
            <div class="conditions">
                <span class="condition">¥{{item.minMoney}}起配送 / 配送费{{item.fee}}</span>
            </div>
        </div>
        <div class="right">
            <div class="tag">
                <span class="tagItem">保</span>
                <span class="tagItem">准</span>
                <span class="tagItem">票</span>
            </div>
            <div class="note">
                <span class="noteItem">准时达</span>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ShopCell",
        props: {
	        index: Number,
            item: Object
        }
	}
</script>

<style scoped>
    .cell {
        background-color: #ffffff;
        display: flex;
        flex: 1;
        flex-direction: row;
        padding-top: 5px;
        padding-bottom: 3px;
        border-bottom-style: solid;
        border-bottom-color: #ededed;
        border-bottom-width: 1px;
        padding-right: 8px;
        padding-left: 8px;
    }
    
    .left {
        display: flex;
    }
    .img {
        width: 60px;
        height: 60px;
        align-self: center;
    }
    
    .middle {
        display: flex;
        flex: 1;
        margin-left: 5px;
        flex-direction: column;
        justify-content: space-around;
    }
    .middleTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1;
    }
    .brand {
        font-size: 10px;
        background-color: darkorange;
        padding-left: 2px;
        padding-right: 2px;
    }
    .title {
        font-size: 14px;
        margin-left: 5px;
    }
    .middleScore {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        flex: 1;
    }
    .score {
        color: #FFA500;
        font-size: 13px;
    }
    .sales {
        color: #999999;
        font-size: 11px;
        margin-left: 10px;
    }
    .conditions {
        flex: 1;
        display: flex;
    }
    .condition {
        font-size: 10px;
        color: #999999;
        align-self: flex-end;
    }
    
    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        margin-left: 5px;
    }
    .tag {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .tagItem {
        font-size: 10px;
        color: #999999;
        text-align: center;
        width: 16px;
        height: 16px;
        margin-right: 3px;
        border-style: solid;
        border-color: #dedede;
        border-width: 1px;
        border-radius: 4px;
    }
    .note {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .noteItem {
        font-size: 10px;
        color: #32CD32;
        border-style: solid;
        border-color: #19A318;
        border-width: 1px;
        border-radius: 4px;
        padding-right: 2px;
        padding-left: 2px;
        margin-right: 3px;
    }
</style>
