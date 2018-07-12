<template>
	<div>
		<gallery :items="items" />
	</div>
</template>
<script>
	import gallery from '@/components/paper/gallery';
	import axios from 'axios';
	export default {
		data:function(){
			return {
				items:[]
			}
		},
		components:{
			gallery
		},
		created:function(){
			var me=this;
			axios.get('/static/db/landscape.json')
  				.then(function (response) {
  					var data=response.data;
  					me.items=data;
				  })
			  	.catch(function (error) {
				    console.log(error);
			});
		}
	}
</script>
<style scoped>
	
</style>