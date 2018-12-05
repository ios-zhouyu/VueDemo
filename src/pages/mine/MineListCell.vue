<template>
    <div class="cell">
        <img :src="require('../../assets/mine/' + item.icon)" class="icon">
        <div class="middle">
            <span class="title">{{item.title}}</span>
            <span class="subTitle">{{item.subTitle}}</span>
        </div>
        <img src="../../assets/mine/Chevron_2@3x.png" class="arrow">
    </div>
</template>

<script>
	export default {
		name: "MineListCell",
        props: {
			index: Number,
            item: Object
        }
	}
</script>

<style scoped>
    .cell {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        background-color: #ffffff;
        border-bottom-color: #ededed;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        padding-right: 8px;
    }
    .icon {
        width: 30px;
        height: 30px;
    }
    .middle {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .title {
        color: #333333;
        font-size: 15px;
    }
    .subTitle {
        color: #999999;
        font-size: 12px;
    }
    .arrow {
        width: 7px;
        height: 13px;
        margin-left: 3px;
    }
</style>
