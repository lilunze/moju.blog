<template>
	<footer class="copyright">
		<div class="bottom">
			<dl>
				<dt>联系我</dt>
				<dd><a class="icon-github" href="https://github.com/lilunze" target="_blank"></a><a class="icon-weibo" href="http://weibo.com/3171937264" target="_blank"></a><a href="mailto:lilunze@hotmail.com" class="icon-mail" target="_blank"></a></dd>
			</dl>
			<dl>
				<dt>关于我</dt>
				<dd>90后，水瓶男，前端工程师，全栈开发尝试者</dd>
			</dl>
			<dl>
				<dt>关于本站</dt>
				<dd>好咖啡要和朋友一起品尝</dd>
			</dl>
		</div>
		<p>© 2018 <i></i> MoJu power by LILUNZE</p>
	</footer>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.copyright
	{
		font-size: 16px;
		background: #fff;
		width: 100%;
		color: #999;
		bottom: 0;
		line-height: 30px;
		text-align: center;
		padding: 30px 0 10px;
		box-sizing: border-box;
	}
	.copyright .bottom
	{
		width: 1400px;
		margin: 0 auto;
		display: flex;
	}
	.copyright .bottom dl
	{
		flex-grow: 1;
  		width: 33.33%;
	}
	.copyright .bottom dt
	{
		color: #000;
		font-size: 15px;
		line-height: 40px;
	}
	.copyright .bottom dd
	{
		font-size: 14px;
		color: #666;
	}
	.copyright i
	{
		display: inline-block;
		vertical-align: top;
		width: 20px;
		height: 20px;
		background: url(/static/images/icon/love.png);
		background-size: 100% 100%;
		margin-top: 5px;
	}
	.copyright a
	{
		display: inline-block;
		width: 20px;
		height: 20px;
		margin: 0 10px;
	}
	.icon-github
	{
		background: url(/static/images/icon/github.svg);
		background-size: 100% 100%;
	}
	.icon-weibo
	{
		background: url(/static/images/icon/weibo.svg);
		background-size: 100% 100%;
	}
	.icon-mail
	{
		background: url(/static/images/icon/mail.svg);
		background-size: 100% 100%;
	}
</style>