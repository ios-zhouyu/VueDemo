<template>
    <div>
        <NavBar title="首页">
            <div class="leftItems" slot="left">
                <!--<img class="backBtuuon" src="../../assets/navbar/back_icon@3x.png"/>-->
            </div>
            <div class="rightItems"slot="right" >
                <!--<img class="rightItem" src="../../assets/navbar/Action_Share_60x60_@3x.png"/>-->
                <!--<img class="rightItem" src="../../assets/navbar/add_addressicon_16x16_@2x.png"/>-->
            </div>
        </NavBar>
        <TopView :topList="topList"/>
        <ShopView/>
    </div>
</template>

<script>
	import NavBar from '../../components/NavBar'
    import TopView from './HomeTopView'
    import ShopView from './HomeShopView'
    
    export default {
        name: "Home",
        components: {
	        NavBar,
	        TopView,
	        ShopView
        },
        data() {
        	return {
        		topList: [
                    {
                    	title: '甜点饮品',
                        img: '1.jpg'
                    },
			        {
				        title: '红烧肉',
				        img: '2.jpg'
			        },
			        {
				        title: '医疗',
				        img: '3.jpg'
			        },
			        {
				        title: '超市',
				        img: '4.jpg'
			        },
			        {
				        title: '新店特惠',
				        img: '5.jpg'
			        },
			        {
				        title: '三明治',
				        img: '6.jpg'
			        },
			        {
				        title: '咖啡',
				        img: '7.jpg'
			        },
			        {
				        title: '西餐',
				        img: '8.jpg'
			        },
			        {
				        title: '中餐',
				        img: '9.jpg'
			        },
			        {
				        title: '酸菜鱼',
				        img: '10.jpg'
			        },
			        {
				        title: '麻辣烫',
				        img: '11.jpg'
			        },
			        {
				        title: '新店',
				        img: '12.jpg'
			        },
			        {
				        title: '美味',
				        img: '13.jpg'
			        },
			        {
				        title: '水果',
				        img: '14.jpg'
			        }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
