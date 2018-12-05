<template>
    <div class="header" @click="loginClick(header.name)">
        <div class="left">
            <img :src="require('../../assets/mine/' + header.icon)" class="icon">
        </div>
        <div class="middle">
            <span class="login">{{(header.name == "" || header.name == null) ? "登录/注册" : header.name}}</span>
            <div class="phoneDiv">
                <img src="../../assets/mine/chatListMultiTalkIcon_15x15_@3x.png" class="phoneImg">
                <span class="phoneNumber">{{header.phone}}</span>
            </div>
        </div>
        <div class="right">
            <img src="../../assets/mine/Chevron_2@3x.png" class="arrow">
        </div>
    </div>
</template>

<script>
	export default {
		name: "MineHeaderView",
        props: {
	        header: Object
        },
        methods: {
	        loginClick(name) {
	        	if (name === '' || name === null) {
	        		this.$router.push({path: '/login'})
                } else {
	        		console.log('跳入我的资料页面')
                }
            }
        }
	}
</script>

<style scoped>
    .header {
        background-color: #19A318;
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 45px;
    }
    
    .left {
    
    }
    .icon {
        width: 40px;
        height: 40px;
        border-radius: 25px;
        border-style: solid;
        border-width: 2px;
        border-color: #666666;
        background-color: #999999;
    }
    
    .middle {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }
    .login {
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
    }
    .phoneDiv {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
    }
    .phoneImg {
        width: 10px;
        height: 15px;
    }
    .phoneNumber {
        color: #ffffff;
        font-size: 12px;
        margin-left: 5px;
    }
    
    .right {
    
    }
    .arrow {
        width: 10px;
        height: 15px;
    }
</style>
