<template>
	<section>
		<router-link to="/travel/v10001" class="banner">
			<p><img src="/static/images/banner/banner.jpg"></p>
			<p class="title">生活不止眼前的苟且，还有远方的枸杞岛</p>
			<p class="desc">
				<span><i class="author"></i> moju</span>
				<span><i class="date"></i> 2018-07-05</span>
				<span><i class="classify"></i> 游记</span>
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
					list:[
						{
							title:"去枸杞岛旅游是一种什么样的体验",
							cover_url:"/static/cover/cover-1.jpg",
							date:"2018-07-03",
							author:"moju"
						},
						{
							title:"去枸杞岛旅游是一种什么样的体验",
							cover_url:"/static/cover/cover-2.jpg",
							date:"2018-07-03",
							author:"moju"
						}
					]
				},
				blog:{
					tag:"博客",
					list:[
						{
							title:"去枸杞岛旅游是一种什么样的体验",
							cover_url:"/static/cover/cover-1.jpg",
							date:"2018-07-03",
							author:"moju"
						},
						{
							title:"去枸杞岛旅游是一种什么样的体验",
							cover_url:"/static/cover/cover-2.jpg",
							date:"2018-07-03",
							author:"moju"
						}
					]
				}
				
			}
		},
		created (){
			axios.get("/static/db/travel.json").then((res)=>{
				this.travel.list=res.data.slice(0,3)

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
	.banner .desc .classigy
	{
		background: url(/static/images/icon/classify.png);
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
