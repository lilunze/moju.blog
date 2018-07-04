<template>
	<div class="ablock">
		<p class="cover"><img src="/static/cover/cover-1.jpg"></p>
		<div class="info">
			<p class="intro">
				<span><i class="author"></i> moju</span>
				<span><i class="date"></i> 2018-07-03</span>
			</p>
			<p class="title">去枸杞岛游玩是一种怎样的体验</p>
			<p class="desc"> 最后我们的票是这样的（上午6:10——下午4:00）：南浦——沈家湾码头（车）沈家湾码头——泗礁（船）泗礁——小菜园码头（打车）小菜园码头——枸杞岛（船）如果买票顺利的话和我们回来一样，只要直接买到从上海到枸杞的车船联票就很快了，4个小时足矣。就看看这个过程我去了当然后悔呀，比出趟国还难2.住宿 因为从南浦出发的车很早，一天只有一班，特别推荐附近的“雍和宾馆“🏨，各种好！在枸杞岛的住宿其实不成问题，自己多看看多比较比较就可以了哦
			</p>
		</div>
	</div>
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
			
		}
	}
</script>
<style scoped>
	.ablock
	{
		display: flex;
		margin-top: 20px;
	}
	.cover
	{
		width: 0;
		flex-grow:3;
	}
	.cover img
	{
		width: 100%;
	}
	.info
	{
		width: 0;
		flex-grow: 5;
		padding-left: 10px;
	}
	.intro
	{
		color: #a8a8a8;
		font-size: 14px;
	}
	.intro span
	{
		display: inline-block;
		margin: 0 10px;
		line-height: 40px; 
	}
	.intro i
	{
		display: inline-block;
		vertical-align: top;
		width: 20px;
		height: 20px;
		margin: 10px 5px;
	}
	.intro .author
	{
		background: url(/static/images/icon/author.png);
		background-size: 100% 100%;
	}
	.intro .date
	{
		background: url(/static/images/icon/date.png);
		background-size: 100% 100%;
	}
	.title
	{
		font-size: 18px;
		color: #333;
		padding-left: 10px;
	}
	.desc
	{
		font-size: 15px;
		color: #999;
		line-height: 24px;
		padding-left: 10px;
		margin-top: 20px;
	}
</style>