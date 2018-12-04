<template>
    <div class="tabbar">
        <div class="tabbar-item" @click="selectedTab('/home')">
            <img v-if="'/home'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_mainframeHL_24x22_@3x.png"/>
            <img v-else class="item-icon" src="../assets/tabbar/tabbar_mainframe_24x22_@3x.png"/>
            <span class="item-title" :class="{on:'/home'===$route.path}">首页</span>
        </div>
        <div class="tabbar-item" @click="selectedTab('/search')">
            <img v-if="'/search'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_contactsHL_26x22_@3x.png"/>
            <img v-else class="item-icon" src="../assets/tabbar/tabbar_contacts_26x22_@3x.png"/>
            <span class="item-title" :class="{on:'/search'===$route.path}">搜索</span>
        </div>
        <div class="tabbar-item" @click="selectedTab('/shop')">
            <img v-if="'/shop'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_discoverHL_22x22_@3x.png"/>
            <img v-else class="item-icon" src="../assets/tabbar/tabbar_discover_22x22_@3x.png"/>
            <span class="item-title" :class="{on:'/shop'===$route.path}">商店</span>
        </div>
        <div class="tabbar-item" @click="selectedTab('/mine')">
            <img v-if="'/mine'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_meHL_22x22_@3x.png"/>
            <img v-else class="item-icon" src="../assets/tabbar/tabbar_me_22x22_@3x.png"/>
            <span class="item-title" :class="{on:'/mine'===$route.path}">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBar',
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
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        height: 49px;
        border-width: 1px;
        border-color: #FF0000;
        align-items: center;
        justify-content: center;
    }
    .item-title {
        color: #000000;
        font-size: 10px;
        margin-top: 3px;
    }
    .item-icon {
        width: 20px;
        height: 20px;
        margin-top: 5px;
    }
    .on {
        color: #19A318;
    }
</style>
