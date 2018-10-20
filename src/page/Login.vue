<template>
	<div class="login" >
		<mt-header title="登录页面" :style='{background:"#000"}'>
		  <router-link to="/" slot="left">
		    <mt-button icon="back">back</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script>
import { Header } from 'mint-ui';
	export default {
		data(){
			return {
				msg:''
			}
		}
	}
</script>
<style scoped>
</style>