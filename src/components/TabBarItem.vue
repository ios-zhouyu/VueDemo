<template>
    <div class="tabbar-item" @click="selectedTab(item.titleKey)">
        <img v-if="item.titleKey===$route.path" class="item-icon" :src="require('../assets/tabbar/' + item.selectedImg)"/>
        <img v-else class="item-icon" :src="require('../assets/tabbar/' + item.normalImg)"/>
        <span class="item-title" :class="{on:item.titleKey===$route.path}">{{item.title}}</span>
    </div>
</template>

<script>
 
	export default {
		name: "TabBatItem",
        props: {
			item: Object,
            index: Number
        },
		methods: {
			selectedTab(path) {
				this.$router.replace(path)
                this.$emit('selectedTab', this.index)
			}
		}
	}
</script>

<style scoped>
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
