<template>
    <div class="topView">
        <div v-for="(item, index) in topList" :key="index" :index="index" class="item" @click="selectedItem(item, index)">
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
        },
        methods: {
	        selectedItem(item, index) {
	        	console.log(item, index)
            }
        }
	}
</script>

<style scoped>
    .topView {
        margin: 0px;
        display: flex;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        background-color: #ffffff;
        padding-right: 8px;
        padding-left: 8px;
        padding-bottom: 8px;
    }
    .item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
    }
    .img {
        width: 50px;
        height: 50px;
    }
    .title {
        font-size: 12px;
        align-self: center;
    }
</style>
