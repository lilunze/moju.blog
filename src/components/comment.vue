<template>
	<div class="navigation">
		<span class="tips" :style="{left: mleft+'px', top: mtop+'px'}">{{message}}</span>
		<div class="container">
			<div class="box box_movie">
				<h1><img src="/static/images/icon/movie.png">影视资源</h1>
				<div class="content">
					<a href="#" @mousemove="showTips($event)" @mouseout="hideTips()" title="鱼骨吧电影网"><img src="/static/images/icon/default.png">鱼骨吧电影网</a>
					<a href="#" @mousemove="showTips($event)" @mouseout="hideTips()" title="西瓜哥电影网"><img src="/static/images/icon/default.png">西瓜哥电影网</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components:{},
		data () {
			return {
				mleft:-100,
				mtop:-100,
				message:'123'
			}
		},
		created () {

		},
		methods:{
			showTips (e){
				this.mtop=e.clientY+20;
				this.mleft=e.clientX+20;
				if(e.target.attributes.title){
					this.message=e.target.attributes.title.value
				}
				
				
			},
			hideTips (){
				this.mtop=-100;
				this.mleft=-100;
			}
		}
	}
</script>
<style scoped>
	.tips
	{
		display: inline-block;
		position: absolute;
		font-size: 16px;
		background: #161616;
		color: #F1F1F1;
		line-height: 30px;
		padding: 0 10px;
		border-radius: 6px;
	}
	.container
	{
		width: 1200px;
		margin: 0 auto;
	}
	.container .box
	{
		width: 100%;
		background: #fff;
		border-radius: 8px;
		margin-top: 10px;
		overflow: hidden;
	}
	.container .box h1
	{
		background: #F1F1F1;
		font-size: 16px;
		line-height: 26px;
		box-sizing: border-box;
		color: #765757;
		font-weight: normal;
		padding: 10px;
	}
	.container .box h1 img
	{
		vertical-align: top;
		height: 26px;
		margin-right: 10px;
	}
	.container .content
	{
		box-sizing: border-box;
		padding: 20px;
		font-size: 0;
	}
	.container .content a
	{
		display: inline-block;
		vertical-align: top;
		width: 180px;
		box-sizing: border-box;
		padding: 8px 8px;
		font-size: 14px;
		line-height: 20px;
		margin: 10px 0;
		color: #7D7D7D;
		text-decoration: none;
		border-radius: 6px;
	}
	.container .content a img
	{
		height: 20px;
		vertical-align: top;
		margin-right: 6px;
	}
	.container .content a:hover
	{
		background: #E6E3E3;
	}
</style>