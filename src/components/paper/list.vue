<template>
	<div class="list">
		<header>
			<router-link class="logo" to="/"><img src="@/assets/logo/logo-m.png"></router-link>
			<div class="current">當前圖片張數 <i-count-up :endVal="98934" :duration="1" /> 張，含免費商用圖片 <i-count-up :endVal="8432" :duration="0.8" /> 張</div>
		</header>
		<div class="tags">
			<router-link to="/paper/list/hot">精选</router-link>
			<router-link to="/paper/list/landscape">風景</router-link>
			<router-link to="/paper/list/beauty">美女</router-link>
			<router-link to="/paper/list/meowstar">喵星人</router-link>
			<router-link to="/paper/list/comic">二次元</router-link>
			<router-link to="/paper/list/car">汽車</router-link>
		</div>
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>
<script>
	import axios from 'axios';
	import ICountUp from 'vue-countup-v2';
	export default {
		components:{
			ICountUp
		}
	}
</script>
<style scoped>
	.list
	{
		background: #f5f5f5;
	}
	header
	{
		height: 280px;
		background: url(/static/res/0001.jpg);
	    background-attachment: fixed;
	    background-size: 100% auto; 
	}
	header .logo img
	{
		width: 60px;
		margin: 20px 30px;
	}
	header .current
	{
		text-align: center;
		font-size: 28px;
		font-weight: bold;
		color: #fff;
		line-height: 50px;
		margin-top:50px;
	}
	.tags
	{
		font-size: 0;
	 	text-align: center;
		background: #fff;
	}
	.tags a
	{
		color: #333;
		margin: 0 15px;
		display: inline-block;
		text-decoration: none;
		font-size: 16px;
		line-height: 50px;
		box-sizing: border-box;
	}
	.tags .router-link-exact-active
	{
		border-bottom: 3px solid red;
	}
</style>