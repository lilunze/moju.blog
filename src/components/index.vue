<template>
	<div class="index">
		<div class="mask">
			<nav class="nav">
				<div class="logo"><img src="/static/logo/logo-a.png"></div>
				<div class="nav_list">
					<a href="#" class="icon github"></a>
					<a href="#" class="icon weibo"></a>
					<a href="#" class="icon search"></a>
				</div>
			</nav>
			
			<section class="main">
				<div class="left">
					<span class="line"></span>
					<span class="text">GOOD <span style="color:#C9A94B">COFFEE</span></span>
				</div>
				<div class="center">
					<p class="avatar"><img src="/static/res/avatar.jpg"></p>
				</div>
				<div class="right">
					<ul>
						<li><router-link to="/blog">BLOG</router-link></li>
						<!-- <li><router-link to="/archives">Archives</router-link></li> -->
						<li><router-link to="/todo">TODO</router-link></li>
						<li><router-link to="/comment">COMMENT</router-link></li>
						<li><router-link to="/wiki">WIKI</router-link></li>
						<li><router-link to="/question">Q&A</router-link></li>
					</ul>
				</div>
			</section>

			<footer class="copyright">
				© 2018 <i></i> MoJu power by lilunze
			</footer>
		</div>
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
	.mask
	{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.9);
	}
	.nav
	{
		padding: 20px 40px;
	}
	.nav .logo
	{
		display: inline-block;
		width: 100px;
	}
	.nav .logo img
	{
		width: 100%;
	}
	.nav_list
	{
		display: inline-block;
		float: right;
		margin-top: 6px;
	}
	.nav_list .icon
	{
		display: inline-block;
		width: 28px;
		height: 28px;
		margin: 0 16px;
	}
	.nav_list .github
	{
		background: url(/static/images/icon/github.png);
		background-size: 100% 100%;
	}
	.nav_list .weibo
	{
		background: url(/static/images/icon/weibo.png);
		background-size: 100% 100%;
	}
	.nav_list .search
	{
		background: url(/static/images/icon/search.png);
		background-size: 100% 100%;
	}
	.main
	{
		padding: 0 100px;
		text-align: center;
	}
	.main .left
	{
		display: inline-block;
		vertical-align: top;
		float: left;
		margin-top: 14%;
	}
	.main .left  .text
	{
		font-size: 30px;
		color: #fff;
		writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/  
    	writing-mode: tb-lr;
    	letter-spacing: 9px;
	}
	.main .center
	{
		display: inline-block;
		width: 200px;
		margin: 16% auto 0;
	}
	.main .center .avatar
	{
		display: inline-block;
		width: 150px;
		height: 150px;
	}
	.main .center .avatar img
	{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.main .right
	{
		display: inline-block;
		float: right;
		vertical-align: top;
		margin-right: 100px;
		margin-top: 14%;
		text-align: left;
	}
	.main .right li
	{
		list-style: none;	
		line-height: 34px;
	}

	.main .right li a:before
	{
		position: absolute;
	    bottom: 0px;
	    left: 0;
	    content: "";
	    width: 0%;
	    height: 2px;
	    background: #C9A94B;
	    display: block;
	    -webkit-transition: width 0.25s ease;
	    transition: width 0.25s ease;
	}

	.main .right li a 
	{
		display: inline-block;
		position: relative;
		color: #eee;
		font-size: 18px;
		text-decoration: none;
		letter-spacing: 4px;
		margin: 10px 0;
	}
	.copyright
	{
		position: fixed;
		width: 100%;
		color: #fff;
		bottom: 0;
		line-height: 30px;
		text-align: right;
		padding: 0 40px;
		box-sizing: border-box;
	}
	.main .right li a:hover 
	{
		color: #C9A94B
	}
	.main .right li a:hover:before
	{
		width: 100%;
	}
	
</style>