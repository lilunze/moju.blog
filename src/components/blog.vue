<template>
	<div class="blog">
		<router-view />	
		<div>
			<ablock />
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import ablock from '@/components/common/ablock'
	export default {
		components:{
			ablock
		},
		data () {
			return {
				list:[]
			}
		},
		created () {

			
		}
	}
</script>
<style scoped>
	.blog
	{
		width: 1400px;
		margin: 0 auto;
	}
</style>