<template>
	<div class="blog">
		<section v-for="item in list">
			<div>{{item.id}}</div>
			<div>{{item.date | formateDate}}</div>
			<div>{{item.desc}}</div>
			<div><i v-for="tag in item.tag">{{tag}}</i></div>
		</section>
		<page />
	</div>
</template>
<script>
	import axios from 'axios'
	import pages from '@/components/pages'
	export default {
		component:{
			pages
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
	
</style>