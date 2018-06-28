<template>
	<div class="pages">
		<span>&gt;</span>
		<span v-for="dot in pages">{{dot}}</span>
		<span>...</span>
		<span>{{total}}</span>
		<span>&lt;</span>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				current:this.currentPage
			}
		},
		props:{
			// 总数据条数
			total:{
				type:Number,
				default:1
			},
			// 每页显示的数据条数
			display:{
				type:Number,
				default:5
			},
			// 当前页码
			currentPage:{
				type:Number,
				default:1
			},
			// 显示的页码
			pages:{
				type:Array,
				default:[]
			}
		},
		created:{

		},
		comuted:{

		},
		methods:{
			setCurrent (index){
				console.log(index)
			},
			next (){
				this.current++;
			},
			prev (){
				this.current--;
			}
		}
	}
</script>
<style scoped>
	
</style>