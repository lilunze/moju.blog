<template>
	<nav class="nav">
		<div class="logo"><img src="/static/logo/logo-x.png"></div>
		<ul class="nav_list">
			<li><router-link to="/home">首页</router-link></li>
			<li><router-link to="/travel">旅行</router-link></li>
			<li><router-link to="/blog">博客</router-link></li>
			<li><router-link to="/comment">话题</router-link></li>
			<li><router-link to="/paper">PAPER</router-link></li>
		</ul>
	</nav>
</template>
<script>
	export default {

	}
</script>
<style scope>
	.nav
	{
		font-size: 16px;
		padding: 14px 40px;
		background: #fff;
	}
	.nav .logo
	{
		display: inline-block;
		width: 140px;
	}
	.nav .logo img
	{
		vertical-align: top;
		width: 100%;
	}
	.nav_list
	{
		list-style: none;
		float: right;
		margin-top: 6px;
	}
	.nav_list li
	{
		display: inline-block;
		margin: 0 10px;
	}
	.nav_list a
	{
		display: inline-block;
		line-height: 40px;
		color: #000;
		text-decoration: none;
		position: relative;
		letter-spacing: 2px;
		font-size: 16px;
		text-align: center;
	}

	.nav_list a:before
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


	.nav_list li a:hover 
	{
		color: #C9A94B
	}
	.nav_list li a:hover:before
	{
		width: 100%;
	}
	
	.nav_list li .router-link-active
	{
		color: #C9A94B;
	}
	.nav_list li .router-link-active:before
	{
		width: 100%;
	}
</style>