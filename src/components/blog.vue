<template>
	<div class="blog">
		<div class="classify">
			<router-link class="all" to="./blog/all">全部</router-link>
			<router-link class="all" to="./blog/vue">vue</router-link>
			<router-link class="all" to="./blog/javascript">javascript</router-link>
			<router-link class="all" to="./blog/react">react</router-link>
			<router-link class="all" to="./blog/angular">angular</router-link>
			<router-link class="all" to="./blog/mobile">移动端</router-link>
		</div>

		<keep-alive>
			<router-view />
		</keep-alive>

	</div>
</template>
<script>
	import axios from 'axios'
	import ablock from '@/components/common/ablock'
	export default {
		component:{
		},
		data () {
			return {
				list:[]
			}
		},
		created () {

			axios.get('/static/db/blog.json').then((res)=>{
				this.list=res.data;
			})
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
	.blog
	{
		width: 100%;
		min-height: 100%;
		background: #eee;
	}
	.classify
	{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #fff;
		text-align: center;
	}
	.classify a
	{
		font-size: 14px;
		color: #999;
		text-decoration: none;
		display: inline-block;
		height: 100%;
		box-sizing: border-box;
		margin: 0 10px;
	}
</style>