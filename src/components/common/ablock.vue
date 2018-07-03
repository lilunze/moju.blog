<template>
	<section class="gallery">
		<div class="item" v-for="item in items">
			<p class="cover"><img :src="'/static/cover/'+item.date+'.jpg'"></p>
			<div class="info">
				<p class="title">{{item.title}}</p>
				<p class="desc">{{item.desc}}</p>
			</div>
		</div>
	</section>
</template>
<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				items:[]
			}
		},
		created () {
			axios.get("/static/db/blog.json").then((res)=>{
				this.items=res.data
			})
		}
	}
</script>
<style scoped>
	.gallery
	{
		width: 1500px;
		margin: 0 auto;
		display: flex;
  		flex-wrap: wrap;
  		justify-content: space-between;
	}

	.gallery .item
	{
		flex-grow: 1;
  		background-color: #fff;
  		width: 300px;
 		height:350px;
 		margin: 10px 10px;
 		font-size: 0;
	}
	
	.gallery .item .cover
	{
		width: 100%;
		height: 245px;
		overflow: hidden;
	}
	.gallery .item img
	{
		height: 245px;
  		object-fit: cover;
  		max-width: 100%;
  		min-width: 100%;
  		vertical-align: bottom;
	}
	
	.gallery .item .title
	{
		font-size: 18px;
		color:#000;
		line-height: 36px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.gallery .item .desc
	{
		font-size: 14px;
		line-height: 20px;
		color: #888;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.gallery .item .info
	{
		box-sizing: border-box;
		padding: 0 10px;
	}
	//处理最后一行
	.gallery::after {
      content: '1';
      flex-grow: 999999999;
    }
</style>