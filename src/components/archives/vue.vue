<template>
	<div class="vue">
		<section>
			<ablock info="list"></ablock>
		</section>
	</div>
</template>
<script>
	import axios from "axios";
	import ablock from '@/components/common/ablock';
	export default {
		component:{
			ablock
		},
		data (){
			return {}
		},
		created (){
			axios.get("/static/db/blog.json").then((res)=>{
				list=res.data;
				list.forEach(function(item,index,arr){
					console.log(arr.indexOf("vue"))
				})
			})
		}
	}
</script>
<style scoped></style>