<template>
	<div class="m_r">
		<header class="top_bar">
		    <a onclick="window.history.go(-1)" class="icon_back"></a>
		    <h3 class="cartname">京东注册</h3>
		</header>
		<main class="user_login_box">
		    <div class="login_dialog">
		        <div class="_username">
		            <input type="text" name="regname" placeholder="用户名/邮箱/手机号" class="user_input" v-model="regname">
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="regpasswd" placeholder="请输入密码" class="user_input" v-model="regpasswd">
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="regpasswd_ag" placeholder="请再次输入密码" class="user_input" v-model="regpasswd_ag">
		        </div>
		        <div class="login_box">
		            <a @click="goSearch()" class="btn_login">注册</a>
		        </div>
		    </div>
		</main>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				regname:'',
				regpasswd:'',
				regpasswd_ag:'',
				regInfo:{}
			}
		},
		methods:{
			goSearch(){
				let _this = this;
				if(_this.regname ==''){
					alert('请输入手机号');
				}else if(_this.regpasswd == '' || _this.regpasswd_ag == ''){
					alert('请输入密码');
				}else if(_this.regpasswd!==_this.regpasswd_ag){
					alert('两次输入的密码不一致');
				}else{
					_this.$http.post('/reg',{
						regName:_this.regname,
						regPasswd:_this.regpasswd
				}).then((res)=>{
					if(res.status == 200){
						_this.regInfo = res.data;
						if(_this.regInfo.status == 1){
							//reg success, go to this login page
							window.history.go(-1);
						}else{
							alert('注册失败');
						}
					}else{
						alert('出现错误');
					}
					console.log(res);
				},(err)=>{
					console.log(err);
				});
				}
				
			}
		}
	}
</script>
<style>
@import '../assets/css/reg.css';
</style>