<template>
	<article>
		<div>{{info.id}}</div>
		<div>{{info.date | formateDate}}</div>
		<div>{{info.desc}}</div>
		<div><i v-for="tag in info.tag">{{tag}}</i></div>
	</article>
</template>
<script>
	export default {
		props:{
			info:{
				type:Object,
				default:{}
			}
		},
		data (){
			return {

			}
		},
		created (){
			this.info={
				"id":1,
				"title":"测试标题",
				"date":20180628,
				"desc":"测试简介300字",
				"tag":["Vue","Javascript","测试"],
				"origin":"moju"
			}
		}
	}
</script>