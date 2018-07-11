<template>
	<div class="travel">
		<h1 class="title"><span>{{list.tag}}</span></h1>
		<ul class="list">	
			<li v-for="item in list.list">
				<router-link :to="item.source">
				<p><img :src="item.cover_url"></p>
				<p class="stitle">{{item.title}}</p>
				<p class="desc">
					<span><i class="author"></i>{{item.author}}</span>
					<span><i class="date"></i>{{item.date | formateDate}}</span>
				</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:{
			list:{
				type: Object,
				default:""
			}
		},
		filters:{
			formateDate (value) {
				if(!value) return '';

				value=value.toString();
				var year=value.substring(0,4);
				var month=value.substring(4,6);
				var day=value.substring(6);
				var date=year + '-' + month + '-' + day;

				return date;
			}
		}
	}
</script>
<style scoped>
	.travel
	{
		width: 100%;
		
	}
	.travel .title
	{
		line-height: 50px;
		font-size: 24px;
		color: #000;
		margin: 40px 0 0 10px;
	}
	.travel .title span
	{
		display: inline-block;
		padding-left: 10px;
		line-height: 26px;
		border-left: 5px solid red;
	}
	.travel ul
	{
		display: flex;
  		flex-wrap: wrap;
  		justify-content: space-between;
	}
	.travel ul li
	{
		flex-grow: 1;
  		background-color: #fff;
 		margin: 10px 10px;
 		font-size: 0;
 		background: #fff;
	}
	.travel li a
	{
		text-decoration: none;
	}
	.travel li img
	{
		height: 245px;
  		object-fit: cover;
  		max-width: 100%;
  		min-width: 100%;
  		vertical-align: bottom;
	}

	.travel .list .stitle
	{
		font-size: 16px;
		color: #333;
		line-height: 40px;
		padding-left: 6px;
	}
	.travel .desc
	{
		color: #a8a8a8;
		font-size: 14px;
		line-height: 30px;
	}
	.travel .desc span
	{
		margin-right: 10px;
	}
	.travel .desc i
	{
		display: inline-block;
		vertical-align: top;
		width: 20px;
		height: 20px;
		margin: 5px 5px;
	}
	.travel .desc .author
	{
		background: url(/static/images/icon/author.png);
		background-size: 100% 100%;
	}
	.travel .desc .date
	{
		background: url(/static/images/icon/date.png);
		background-size: 100% 100%;
	}
</style>