<template>
    <div class="login">
        <NavBar title="登录/注册">
            <div class="leftItems" slot="left" @click="pop">
                <img class="backBtuuon" src="../../assets/navbar/back_icon@3x.png"/>
            </div>
            <div class="rightItems"slot="right" >
            </div>
        </NavBar>
        <div class="top">
            <span class="topTitle">Vue Web App</span>
        </div>
        <div class="middle">
            <div class="middleTop">
                <span class="item" :class="{msgItemOn: isMsgSelected}" @click="msgSelected">短信登录</span>
                <span class="item" :class="{msgItemOn: !isMsgSelected}" @click="pwdSelected">密码登录</span>
            </div>
            <div v-show="isMsgSelected" class="pwdLogin">
                <input v-model="phone" id="phone" type="text" placeholder="手机号">
                <input v-model="phoneCode" id="phoneCode" type="text" placeholder="验证码">
                <span class="tip">温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意<span class="protocol" @click="protocolClick">《用户服务协议》</span></span>
            </div>
            <div v-show="!isMsgSelected" class="msgLogin">
                <input v-model="account" id="account" type="text" placeholder="手机/邮箱/用户名">
                <input v-model="password" id="password" type="text" placeholder="密码">
                <input v-model="code" id="code" type="text" placeholder="验证码">
            </div>
            <p class="loginButton" @click="loginClick">登录</p>
        </div>
        <div class="bottom">
            <span class="aboutUs">关于我们</span>
        </div>
    </div>
</template>

<script>
	import NavBar from '../../components/NavBar'
 
	export default {
		name: "Login",
        components: {
	        NavBar
        },
        data() {
			return {
                isMsgSelected: true,
				account: '',
				password: '',
				code: '',
				phone: '',
				phoneCode: ''
            }
        },
        methods: {
	        pop() {
	        	this.$router.go(-1)
            },
	        protocolClick() {
	        	console.log('用户协议')
            },
	        msgSelected() {
	        	this.isMsgSelected = true
            },
	        pwdSelected() {
		        this.isMsgSelected = false
            },
	        loginClick() {
	        	const {account, password, code, phone, phoneCode} = this
	        	if (this.isMsgSelected) {//短信验证码登录
			        console.log(phone, phoneCode)
                } else {//密码登录
			        console.log(account, password, code)
                }
            }
        }
	}
</script>

<style scoped>
    .login {
        background-color: #ffffff;
        margin-top: 45px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .top {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .topTitle {
        color: #19a318;
        font-size: 40px;
        text-align: center;
    }
    
    .middle {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .middleTop {
        display: flex;
        flex-direction: row;
    }
    .item {
        margin-left: 20px;
        margin-right: 20px;
        font-size: 15px;
        color: #333333;
    }
    .msgLogin {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        height: 120px;
    }
    .pwdLogin {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        height: 120px;
    }
    input[type='text'] {
        width: 77%;
        border-radius: 4px;
        border-style: solid;
        border-color: #dedede;
        border-width: 1px;
        margin-bottom: 10px;
        height: 25px;
        padding-left: 5px;
    }
    .msgItemOn {
        color: #19a318;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: #19a318;
    }
    .tip {
        width: 80%;
        font-size: 10px;
        color: #666666;
    }
    .protocol {
        color: #19a318;
    }
    
    .loginButton {
        text-align: center;
        width: 80%;
        color: #ffffff;
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        background-color: #19a318;
        border-radius: 4px;
        margin-top: 20px;
        margin-bottom: 15px;
    }
    
    .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .aboutUs {
        color: #999999;
        font-size: 12px;
    }
</style>
