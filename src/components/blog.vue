<template>
	<div class="blog">	
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
		width: 1400px;
		margin: 0 auto;
	}
</style>