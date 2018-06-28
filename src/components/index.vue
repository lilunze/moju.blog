<template>
	<div class="index">
		<nav class="nav">
			<div class="logo"><img src="/static/images/logo/logo-m.png"></div>
			<div class="nav_list">
				<a href="#" class="icon-github"></a>
				<a href="#" class="icon-weibo"></a>
				<a href="#" class="icon-search"></a>
			</div>
		</nav>
		
		<section>
			<div class="left"></div>
			<div class="center">
				<!-- <p><img src="/static/images/res/avatar.png"></p> -->
			</div>
			<div class="right">
				<ul>
					<li><router-link to="/blog">Blog</router-link></li>
					<li><router-link to="/archives">Archives</router-link></li>
					<li><router-link to="/todo">Todo</router-link></li>
					<li><router-link to="/comment">Comment</router-link></li>
					<li><router-link to="/wiki">Wiki</router-link></li>
					<li><router-link to="/question">Q&A</router-link></li>
				</ul>
			</div>
		</section>

		<footer class="copyright">
			
		</footer>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		created () {

		}
	}
</script>
<style scpoed>
	.index
	{
		width: 100%;
		height: 100%;
		background: url(/static/images/background/bg_1.jpg);
		background-attachment: fixed;
	}
</style>