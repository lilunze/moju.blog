<template>
	<div class="post-title">
		<h1>{{title}}</h1>

		<div class="desc">
			<span><i class="author"></i> {{author}}</span>
			<span><i class="date"></i> {{date | formateDate}}</span>
			<span><i :class="classify"></i> {{tag}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type:String,
				default:''
			},
			author:{
				type:String,
				default:''
			},
			date:{
				type:String,
				default:20180713
			},
			classify:{
				type:String,
				default:''
			},
			tag:{
				type:String,
				default:'游记'
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
	.post-title h1
	{
		text-align: center;
		line-height: 80px;
		padding-top: 50px;
	}
	.post-title .desc
	{
		color: #a8a8a8;
		font-size: 14px;
		text-align: center;
		margin-bottom: 20px;
	}
	.post-title .desc span
	{
		display: inline-block;
		margin: 0 10px;
		line-height: 40px; 
	}
	.post-title .desc i
	{
		display: inline-block;
		vertical-align: top;
		width: 20px;
		height: 20px;
		margin: 10px 5px;
	}
	.post-title .desc .author
	{
		background: url(/static/images/icon/author.png);
		background-size: 100% 100%;
	}
	.post-title .desc .date
	{
		background: url(/static/images/icon/date.png);
		background-size: 100% 100%;
	}
	.post-title .desc .travel
	{
		background: url(/static/images/icon/travel.png);
		background-size: 100% 100%;
	}
</style>