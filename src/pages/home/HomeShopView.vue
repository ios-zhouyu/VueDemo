<template>
    <div class="shopView">
        <div class="header">
            <img src="../../assets/home/Connectkeyboad_icon_120x120_@2x.png" class="headerImg">
            <span class="headerTitle">附近商家</span>
        </div>
        <ShopCell v-for="(item, index) in shopList" :key="index" :index="index" :item="item"/>
    </div>
</template>

<script>
    import ShopCell from '../../components/ShopCell'
    
	export default {
		name: "HomeShopView",
        components: {
			ShopCell
        },
        props: {
	        shopList: Array
        }
	}
</script>

<style scoped>
    .shopView {
        margin-top: 10px;
    }
    .header {
        flex: 1;
        height: 30px;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #efefef;
    }
    .headerImg {
        width: 20px;
        height: 20px;
    }
    .headerTitle {
        font-size: 13px;
        margin-left: 5px;
    }
</style>
