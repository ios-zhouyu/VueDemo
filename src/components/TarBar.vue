<template>
    <div class="tabbar">
        <div class="tabbar-item" :class="{on:'/home'===$route.path}" @click="selectedTab('/home')">
            <image class="item-icon"></image>
            <span class="item-title">首页</span>
        </div>
        <div class="tabbar-item" :class="{on:'/search'===$route.path}" @click="selectedTab('/search')">
            <image class="item-icon"></image>
            <span class="item-title">搜索</span>
        </div>
        <div class="tabbar-item" :class="{on:'/shop'===$route.path}" @click="selectedTab('/shop')">
            <image class="item-icon"></image>
            <span class="item-title">商店</span>
        </div>
        <div class="tabbar-item" :class="{on:'/mine'===$route.path}" @click="selectedTab('/mine')">
            <image class="item-icon"></image>
            <span class="item-title">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBar',
        data: {
            isActive: true
        },
        methods: {
            selectedTab(path) {
                this.$router.replace(path)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabbar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 49px;
        background-color: #efefef;
    }
    .tabbar-item {
        display: flex;
        flex: 1;
        height: 49px;
        border-width: 1px;
        border-color: #FF0000;
        align-items: center;
        justify-content: center;
    }
    .item-title {
        color: #000000;
        font-size: 20px;
    }
    .on {
        color: #FF0000;
    }
</style>
