<template>
	<div class="archives">
		<div class="sublist">
			<ul>
				<li v-for="v in archives"><router-link :to="v.path">{{v.tag}}</router-link></li>
			</ul>
		</div>
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				archives:[]
			}
		},
		created () {
			axios.get('/static/db/archives.json').then((res)=>{
				this.archives=res.data;
			})
		}
	}
</script>
<style scoped></style>