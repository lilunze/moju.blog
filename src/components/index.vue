<template>
	<div class="index">
		<vnav />
		
		<div class="main">
			<router-view />
		</div>

		<vfoot />
	</div>
</template>
<script>
	import vnav from "@/components/common/vnav";
	import vfoot from "@/components/common/vfoot";
	export default {
		components:{
			vnav,
			vfoot
		}
	}
</script>
<style scoped>
	.main
	{
		width: 100%;
		background: #F9F9FB;
		overflow: hidden;
		padding-bottom: 100px;
	}
</style>