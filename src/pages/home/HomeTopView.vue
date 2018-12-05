<template>
    <div class="topView">
        <div v-for="(item, index) in topList" :key="index" :index="index" class="item">
            <img :src="require('../../assets/home/' + item.img)" class="img">
            <span class="title">{{item.title}}</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "HomeTopView",
        props: {
	        topList: Array
        }
	}
</script>

<style scoped>
    .topView {
        height: 180px;
        display: flex;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img {
        width: 50px;
        height: 50px;
    }
    .title {
        font-size: 12px;
    }
</style>
