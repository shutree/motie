<template>
	<div class="login" >
		<mt-header title="登录页面" :style='{background:"#000"}'>
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right">注册</mt-button>
		</mt-header>
		<div class="login-container">
			<p class="login-icon">
				<font-awesome-icon icon="coffee" />
				<input type="text" placeholder="邮箱/手机号"  v-model="username"/>
			</p>
			<p class="login-icon">
				<font-awesome-icon icon="coffee" />
				<input type="password" placeholder="密码" v-model="password"/>
			</p>
			<p class="code">
				<input type="text" class="login-code" v-model="code" />
				<span>shwi</span>
			</p>
			<div class="check">
				<h4>
					<input type="checkbox" checked/>
					<span>记住我</span>
				</h4>
				<a>忘记密码?</a>
			</div>
			<input type="submit" value="登录" class="submit" @click="judgeCode" />
			<div class="coor">
				<h4>合作方一键登录</h4>
				<font-awesome-icon icon="coffee" />
				<font-awesome-icon icon="coffee" />
				<font-awesome-icon icon="coffee" />
			</div>
		</div>
	</div>
</template>

<script>

import { Header } from 'mint-ui';
	export default {
		data(){
			return {
				msg:'',
				username:'',
				password:'',
				code:''
			}
		},
		methods:{
			judgeCode(){
				let writeCode = this.code;

				let codes = document.querySelector('.code span').innerText;
				console.log(codes,writeCode)
				if(writeCode!==codes){
					alert('验证码错误');
					return false;
				}

				this.$router.push({path:'/'});
			}
		}
	}
</script>
<style lang="scss">
	.login-container{
		margin:0 20px;
		font-size:12px;
		p{
			
			border:1px solid #ccc;
			height:40px;
			margin:20px 0;
			input{
				outline:none;
				width:300px;
				border:none;
				height:40px;
				line-height:40px;
			}
		}
		p.login-icon{
			padding-left:5px;
			input{
				padding-left:5px;
			}
		}
		.code{
			border:none;
			overflow:hidden;
			.login-code{
				width:200px;
				border:1px solid #ccc;
				float:left;
				height:38px;
			}
			span{
				float:right;
				display:inline-block;
				width:100px;
				height:38px;
				line-height:40px;
				text-align:center;
				border:1px solid #ccc;
			}
		}
		.check{

			overflow:hidden;
			h4{
				float:left;
			}
			input{
				width:18px;
				vertical-align:middle;
			}
			a{
				float:right;
				color: #419af4;
			}
		}
		.submit{
			margin:20px 0;
			width:335px;
			border:1px solid #ccc;
			height:40px;
			line-height:40px;
			background: #419af4;
			color:#fff;
		}
		.coor{
			svg{
				width:50px;
				margin:10px 10px;
				height:50px;
			}
		}
	}
</style>