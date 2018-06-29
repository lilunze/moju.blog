<template>
	<div class="blog">
		<div class="classify">
			<router-link class="all" to="./all">全部</router-link>
			<router-link class="all" to="./all">vue</router-link>
			<router-link class="all" to="./all">javascript</router-link>
			<router-link class="all" to="./all">react</router-link>
			<router-link class="all" to="./all">angular</router-link>
			<router-link class="all" to="./all">移动端</router-link>
		</div>
		<section v-for="item in list">
			<ablock info="item"></ablock>
		</section>
		<page />
	</div>
</template>
<script>
	import axios from 'axios'
	import ablock from '@/components/common/ablock'
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