<template>
	<div class="blog">
		<router-view />	
	</div>
</template>
<script>
	export default {
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