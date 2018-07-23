<template>
	<div class="post">
		<posthead title="Vue踩坑记录与总结" author="MOJU" date="20180705" classify="blog" tag="Vue" />

		<p class="ugc">1.vue组件新页面不在顶部bug</p>
	</div>
</template>
<script>
	import posthead from '@/components/common/posthead';
	export default {
		components:{
			posthead
		}
	}
</script>
<style scoped>
	.post
	{
		max-width: 960px;
		margin: 0 auto;
		font-size: 16px;
		color: rgba(0,0,0,0.8);
	}
	.post p
	{
		margin-bottom: 20px;
		color: #666;
	}
	.post .img
	{
		/*text-align: center;*/
	}
	.post .img img
	{
		max-width: 650px;
	}
	.post .sm-title
	{
		color:#000;
		font-weight: bold;
	}
	pre
	{
		box-sizing: border-box;
		width: 100%;
		padding: 17px;
	    font: 14px/22px courier new;
	    position: relative;
	    margin: 40px 0;
	    background-color: #DADADA;
	}
	.ugc
	{
		font-size: 24px;
	}
</style>