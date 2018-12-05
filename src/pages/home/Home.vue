<template>
    <div class="home">
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
        <ShopView :shopList="shopList"/>
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
                ],
                shopList: [
                	{
                		img: '1.jpg',
                        brand: '品牌',
                        title: '锄禾日当午,粒粒皆辛苦',
                        score: 4.5,
                        sales: 106,
                        minMoney: 20,
                        fee: 5
                    },
	                {
		                img: '2.jpg',
		                brand: '冒牌店',
		                title: '不买你会后悔,不信试试看',
		                score: 4.0,
		                sales: 444,
		                minMoney: 22,
		                fee: 3
	                },
	                {
		                img: '3.jpg',
		                brand: '直营店',
		                title: '今日特价,快快购买',
		                score: 3.2,
		                sales: 555,
		                minMoney: 24,
		                fee: 6
	                },
	                {
		                img: '4.jpg',
		                brand: '专卖店',
		                title: '本店产品全部6折',
		                score: 3.9,
		                sales: 888,
		                minMoney: 15,
		                fee: 3
	                }
                ]
            }
        }
    }
</script>

<style scoped>
    .home {
        background-color: #fbfbfb;
        width: 100%;
        overflow: hidden;
    }
</style>
