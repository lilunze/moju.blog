<template>
	<section class="gallery">
		<div class="item" v-for="item in items">
			<img :src="item.cover_url">
		</div>
	</section>
</template>
<script>
	export default {
		props:['items'],
		data:function(){
			return {
				line:'h',
				align:'left'
			}
		},
		components:{
		
		}
	}
</script>
<style scoped>
	.gallery
	{
		display: flex;
  		flex-wrap: wrap;
	}

	.gallery .item
	{
		flex-grow: 1;
  		margin:5px;
  		background-color: #eeeff2;
 		height:350px;
	}

	.gallery .item img
	{
		height:350px;
  		object-fit: cover;
  		max-width: 100%;
  		min-width: 100%;
  		vertical-align: bottom;
	}
	//处理最后一行
	.gallery::after {
      content: '1';
      flex-grow: 999999999;
    }
</style>