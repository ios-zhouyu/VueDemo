<template>
    <div class="tabbar">
        <!--普通方式-->
        <!--<div class="tabbar-item" @click="selectedTab('/home')">-->
            <!--<img v-if="'/home'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_mainframeHL_24x22_@3x.png"/>-->
            <!--<img v-else class="item-icon" src="../assets/tabbar/tabbar_mainframe_24x22_@3x.png"/>-->
            <!--<span class="item-title" :class="{on:'/home'===$route.path}">首页</span>-->
        <!--</div>-->
        <!--<div class="tabbar-item" @click="selectedTab('/search')">-->
            <!--<img v-if="'/search'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_contactsHL_26x22_@3x.png"/>-->
            <!--<img v-else class="item-icon" src="../assets/tabbar/tabbar_contacts_26x22_@3x.png"/>-->
            <!--<span class="item-title" :class="{on:'/search'===$route.path}">搜索</span>-->
        <!--</div>-->
        <!--<div class="tabbar-item" @click="selectedTab('/shop')">-->
            <!--<img v-if="'/shop'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_discoverHL_22x22_@3x.png"/>-->
            <!--<img v-else class="item-icon" src="../assets/tabbar/tabbar_discover_22x22_@3x.png"/>-->
            <!--<span class="item-title" :class="{on:'/shop'===$route.path}">商店</span>-->
        <!--</div>-->
        <!--<div class="tabbar-item" @click="selectedTab('/mine')">-->
            <!--<img v-if="'/mine'===$route.path" class="item-icon" src="../assets/tabbar/tabbar_meHL_22x22_@3x.png"/>-->
            <!--<img v-else class="item-icon" src="../assets/tabbar/tabbar_me_22x22_@3x.png"/>-->
            <!--<span class="item-title" :class="{on:'/mine'===$route.path}">我的</span>-->
        <!--</div>-->
        
        <!--v-for方式-->
        <!--<div v-for="(item, index) in items" :key="index" class="tabbar-item" @click="selectedTab(item.titleKey)">-->
            <!--<img v-if="item.titleKey===$route.path" class="item-icon" :src="require('../assets/tabbar/' + item.selectedImg)"/>-->
            <!--<img v-else class="item-icon" :src="require('../assets/tabbar/' + item.normalImg)"/>-->
            <!--<span class="item-title" :class="{on:item.titleKey===$route.path}">{{item.title}}</span>-->
        <!--</div>-->
        
        <!--子组件方式-->
        <TabBarItem v-for="(item, index) in items" :key="index" :index="index" :item="item" @selectedTab="selectedTab"/>
    </div>
</template>

<script>
    import TabBarItem from './TabBarItem'
    
    export default {
        name: 'TabBar',
	    components: {TabBarItem},
	    data: function () {
            return {
	            items: [
		            {
			            normalImg: 'tabbar_mainframe_24x22_@3x.png',
			            selectedImg: 'tabbar_mainframeHL_24x22_@3x.png',
			            titleKey: '/home',
			            title: '首页'
		            },
		            {
			            normalImg: 'tabbar_contacts_26x22_@3x.png',
			            selectedImg: 'tabbar_contactsHL_26x22_@3x.png',
			            titleKey: '/search',
			            title: '搜索'
		            },
		            {
			            normalImg: 'tabbar_discover_22x22_@3x.png',
			            selectedImg: 'tabbar_discoverHL_22x22_@3x.png',
			            titleKey: '/shop',
			            title: '商店'
		            },
		            {
			            normalImg: 'tabbar_me_22x22_@3x.png',
			            selectedImg: 'tabbar_meHL_22x22_@3x.png',
			            titleKey: '/mine',
			            title: '我的'
		            }
	            ]
            }
        },
        methods: {
            selectedTab(index) {
            	const item = this.items[index]
	            this.$emit('selectedTab', item.title)
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
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        height: 49px;
        background-color: #efefef;
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: #dedede;
    }
</style>
