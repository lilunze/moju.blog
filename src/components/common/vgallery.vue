<template>
	<div class="travel">
		<h1><span>{{list.tag}}</span></h1>
		<ul class="list">
			<li v-for="item in list.list">
				<p><img :src="item.cover_url"></p>
				<p class="title">{{item.title}}</p>
				<p class="desc">
					<span><i class="author"></i>{{item.author}}</span>
					<span><i class="date"></i>{{item.date}}</span>
				</p>
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
		font-size: 24px;
		color: #000;
	}
	.travel .title span
	{
		display: inline-block;
		border-bottom: 3px solid red;
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

	.travel li img
	{
		height: 245px;
  		object-fit: cover;
  		max-width: 100%;
  		min-width: 100%;
  		vertical-align: bottom;
	}

	.travel .list .title
	{
		font-size: 16px;
		color: #333;
		line-height: 40px;
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