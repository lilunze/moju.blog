<template>
	<section>
		<router-link to="/travel/v10001" class="banner">
			<p><img src="https://images-1253872303.cos.ap-shanghai.myqcloud.com/posts/v10001/large.jpg"></p>
			<p class="title">生活不止眼前的苟且，还有远方的枸杞岛</p>
			<p class="desc">
				<span><i class="author"></i> moju</span>
				<span><i class="date"></i> 2018-07-05</span>
				<span><i class="icon-travel"></i> 游记</span>
			</p>
		</router-link>
		
		<div class="travel-wrap">
			<vgallery :list="travel" />
		</div>
		

		<div class="sub">
			<div class="sub-item">
				<vgallery :list="paper" />
			</div>
			<div class="sub-item">
				<vgallery :list="blog" />
			</div>	
		</div>
	</section>
</template>
<script>
	import vgallery from "@/components/common/vgallery";
	import axios from "axios"
	export default {
		components:{
			vgallery
		},
		data (){
			return {
				travel:{
					tag:"旅行",
					list:[]
				},
				paper:{
					tag:"Paper",
					list:[]
				},
				blog:{
					tag:"博客",
					list:[]
				}
				
			}
		},
		created (){
			axios.get("/static/db/travel.json").then((res)=>{
				this.travel.list=res.data.slice(0,3)
			})
			axios.get("/static/db/hot.json").then((res)=>{
				this.paper.list=res.data.slice(0,2)
			})
			axios.get("/static/db/blog.json").then((res)=>{
				this.blog.list=res.data.slice(0,2)
			})
		}
	}
</script>
<style scpoed>
	.banner
	{
		display: block;
		text-decoration: none;
		width: 1400px;
		font-size: 0;
		margin: 30px auto 0;
		text-align: center;
	}
	.banner img
	{
		width: 100%;
	}
	.banner .title
	{
		color: #333;
		line-height: 40px;
		font-size: 18px;		
		margin-top:20px;
	}
	.banner .desc
	{
		color: #a8a8a8;
		font-size: 14px;
	}
	.banner .desc span
	{
		display: inline-block;
		margin: 0 10px;
		line-height: 40px; 
	}
	.banner .desc i
	{
		display: inline-block;
		vertical-align: top;
		width: 20px;
		height: 20px;
		margin: 10px 5px;
	}
	.banner .desc .author
	{
		background: url(/static/images/icon/author.png);
		background-size: 100% 100%;
	}
	.banner .desc .date
	{
		background: url(/static/images/icon/date.png);
		background-size: 100% 100%;
	}
	.banner .desc .icon-travel
	{
		background: url(/static/images/icon/travel.png);
		background-size: 100% 100%;
	}

	.travel-wrap
	{
		width: 1400px;
		margin: 0 auto;
	}
	.sub
	{
		width: 1400px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
  		justify-content: space-between;
	}
	.sub-item
	{
		width: 50%;
	}
</style>
