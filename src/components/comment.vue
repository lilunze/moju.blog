<template>
	<div class="comment">
		<p><img src="/static/res/404.png"></p>
		<p class="desc">页面找不到了</p>
		<p class="btn"><router-link to="/home">首页</router-link></p>
	</div>
</template>
<script>
	export default {
		components:{},
		data () {
			return {

			}
		},
		created () {

		}
	}
</script>
<style scoped>
	.comment
	{
		width: 1400px;
		margin: 0 auto;
		text-align: center;
		padding-top: 160px;
	}
	.comment img
	{
		width: 400px;
	}
	.desc
	{
		font-size: 20px;
		color: #000;
		line-height: 80px;
	}
	.btn a
	{
		display: inline-block;
		padding:8px 40px;
		background: #774f8d;
		color: #fff;
		border-radius: 8px;
		text-decoration: none;
		font-size: 18px;
	}
</style>