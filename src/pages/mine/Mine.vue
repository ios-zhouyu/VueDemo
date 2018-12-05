<template>
    <div class="mine">
        <NavBar title="我的">
            <div class="leftItems" slot="left">
                <!--<img class="backBtuuon" src="../../assets/navbar/back_icon@3x.png"/>-->
            </div>
            <div class="rightItems"slot="right" >
                <img class="rightItem" src="../../assets/mine/GameCenterSettingBtnBlack_22x22_@2x.png"/>
                <!--<img class="rightItem" src="../../assets/navbar/add_addressicon_16x16_@2x.png"/>-->
            </div>
        </NavBar>
        <HeaderView :header="header"/>
        <MiddleView :middle="middle"/>
        <ListView :lists="lists"/>
    </div>
    
</template>

<script>
	import NavBar from '../../components/NavBar'
    import HeaderView from './MineHeaderView'
    import MiddleView from './MineMiddleView'
    import ListView from './MineListView'
    
    export default {
        name: "Mine",
        components: {
	        NavBar,
	        HeaderView,
	        MiddleView,
	        ListView
        },
        data() {
        	return {
        		header: {
        			icon: '2a9aba32623f66a7b96f04db523b5754.png',
                    name: '',
                    phone: '15718804712'
                },
                middle: {
        			money: 45.00,
	                coupons: 8,
	                score: 88
                },
                lists: [
                    {
                    	icon: 'Action_ReadClean_60x60_@3x.png',
                        title: '我的订单',
                        desc: '',
                        subTitle: ''
                    },
	                {
		                icon: 'Action_Reading_60x60_@3x.png',
		                title: '积分商城',
		                desc: '',
		                subTitle: '88分'
	                },
	                {
		                icon: 'Action_Refresh_60x60_@3x.png',
		                title: '会员卡片',
		                desc: '',
		                subTitle: '6个'
	                },
	                {
		                icon: 'Action_Remind_60x60_@3x.png',
		                title: '服务中心',
		                desc: '',
		                subTitle: ''
	                }
                ]
            }
        }
    }
</script>

<style scoped>
    .mine {
        background-color: #ededed;
        width: 100%;
    }
</style>
