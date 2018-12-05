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
            <span>Vue App</span>
        </div>
        <div class="middle">
        
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
        methods: {
	        pop() {
	        	this.$router.go(-1)
            }
        }
	}
</script>

<style scoped>
    .login {
        background-color: #ffffff;
        margin-top: 45px;
    }
</style>
