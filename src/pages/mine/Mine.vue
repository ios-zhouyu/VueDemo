<template>
    <div>
        <NavBar title="我的">
            <div class="leftItems" slot="left">
                <!--<img class="backBtuuon" src="../../assets/navbar/back_icon@3x.png"/>-->
            </div>
            <div class="rightItems"slot="right" >
                <img class="rightItem" src="../../assets/mine/GameCenterSettingBtnBlack_22x22_@2x.png"/>
                <!--<img class="rightItem" src="../../assets/navbar/add_addressicon_16x16_@2x.png"/>-->
            </div>
        </NavBar>
    </div>
</template>

<script>
	import NavBar from '../../components/NavBar'
    export default {
        name: "Mine",
        components: {
	        NavBar
        }
    }
</script>

<style scoped>

</style>
