<template>
	<div class="navigation">
		<span class="tips" :style="{left: mleft+'px', top: mtop+'px'}">{{message}}</span>
		<div class="container">
			<div class="box box_movie">
				<h1><img src="/static/images/icon/movie.png">影视资源</h1>
				<div class="content">
					<a href="#" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="鱼骨吧电影网"><img src="/static/images/icon/default.png">鱼骨吧电影网</a>
					<a href="http://xiguage.net/" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="西瓜哥电影网"><img src="/static/images/icon/default.png">西瓜哥电影网</a>
					<a href="http://www.dushudang.com/" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="最新百度云在线点播技术用手机观看免费的电影资源"><img src="/static/images/icon/vipyun.png">VIP云点播</a>
					<a href="http://www.5ifxw.com/vip/" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="最新百度云在线点播技术用手机观看免费的电影资源"><img src="/static/images/icon/vipjiexi.png">VIP在线解析</a>
				</div>
			</div>

			<div class="box box_movie">
				<h1><img src="/static/images/icon/sheyin.png">摄影图片</h1>
				<div class="content">
					<a href="http://www.gogoup.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="站酷旗下在线教育品牌，涵盖摄影艺术,摄影后期,绘画插画,平面设计,影视动画等"><img src="/static/images/icon/gogoup.png">高高手</a>
					<a href="http://www.doyoudo.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="创意设计软件学习平台"><img src="/static/images/icon/doyoudo.png">doyoudo</a>
					<a href="http://www.poco.cn/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="中国领先时尚的图片分享平台,最大的以原创图片为核心的分享社区,汇聚百万摄影与视觉爱好者"><img src="/static/images/icon/poco.png">POCO</a>
					<a href="http://www.xiangshu.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="支持爱奇艺，腾讯视频，优酷等网站VIP破解"><img src="/static/images/icon/xiangshu.png">橡树摄影网</a>
				</div>
			</div>

			<div class="box box_movie">
				<h1><img src="/static/images/icon/design.png">设计</h1>
				<div class="content">
					<a href="https://www.3d66.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="模型最多最全的网站"><img src="/static/images/icon/3d66.png">3D溜溜网</a>
					<a href="https://www.zcool.com.cn/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="中国人气设计师互动平台"><img src="/static/images/icon/zcool.png">站酷</a>
					<a href="http://huaban.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="设计师寻找灵感的天堂!图片素材领导者"><img src="/static/images/icon/huaban.png">花瓣网</a>
				</div>
			</div>

			<div class="box box_movie">
				<h1><img src="/static/images/icon/study.png">学习</h1>
				<div class="content">
					<a href="http://www.51zxw.net" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="免费视频教程,提供全方位软件学习"><img src="/static/images/icon/51zixue.png">我要自学网</a>
					<a href="https://study.163.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="专注职业技能提升的在线学习平台"><img src="/static/images/icon/163study.png">网易云课堂</a>
					<a href="https://ke.qq.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="腾讯推出的专业在线教育平台"><img src="/static/images/icon/tecent.png">腾讯课堂</a>
					<a href="http://www.rrzxw.net/index.html" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="最全的自学教程网站,可在线观看免费视频教程"><img src="/static/images/icon/renrenzixue.png">人人自学网</a>
					<a href="https://www.udemy.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="是一个在线学习和教学市场，有 80000 余门课程，拥有 24 百万学生。课程包括编程、市场营销、数据科学等等"><img src="/static/images/icon/udemy.png">Udemy</a>
				</div>
			</div>

			<div class="box box_movie">
				<h1><img src="/static/images/icon/pojie.png">资源破解</h1>
				<div class="content">
					<a href="http://www.carrotchou.blog" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="软件分享真正领跑者！一直被抄袭，从未被超越！"><img src="/static/images/icon/carrot.png">胡萝卜周</a>
				</div>
			</div>

			<div class="box box_movie">
				<h1><img src="/static/images/icon/job.png">求职/兼职</h1>
				<div class="content">
					<a href="https://www.jianzhimao.com/" target="_blank" @mousemove="showTips($event)" @mouseout="hideTips()" dtitle="免费、安全、靠谱｜大学生蓝领喜爱的临时工站点"><img src="/static/images/icon/jianzhimao.png">兼职猫</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components:{},
		data () {
			return {
				mleft:-100,
				mtop:-100,
				message:'123'
			}
		},
		created () {

		},
		methods:{
			showTips (e){
				console.log(e)
				this.mtop=e.pageY+20;
				this.mleft=e.pageX+20;
				if(e.target.attributes.dtitle){
					this.message=e.target.attributes.dtitle.value
				}
				
				
			},
			hideTips (){
				this.mtop=-100;
				this.mleft=-100;
			}
		}
	}
</script>
<style scoped>
	.tips
	{
		display: inline-block;
		position: absolute;
		font-size: 16px;
		background: #161616;
		color: #F1F1F1;
		line-height: 30px;
		padding: 0 10px;
		border-radius: 6px;
	}
	.container
	{
		width: 1200px;
		margin: 0 auto;
	}
	.container .box
	{
		width: 100%;
		background: #fff;
		border-radius: 8px;
		margin-top: 10px;
		overflow: hidden;
	}
	.container .box h1
	{
		background: #F1F1F1;
		font-size: 16px;
		line-height: 26px;
		box-sizing: border-box;
		color: #765757;
		font-weight: normal;
		padding: 10px;
	}
	.container .box h1 img
	{
		vertical-align: top;
		height: 26px;
		margin-right: 10px;
	}
	.container .content
	{
		box-sizing: border-box;
		padding: 20px;
		font-size: 0;
	}
	.container .content a
	{
		display: inline-block;
		vertical-align: top;
		width: 180px;
		box-sizing: border-box;
		padding: 8px 8px;
		font-size: 14px;
		line-height: 20px;
		margin: 10px 0;
		color: #7D7D7D;
		text-decoration: none;
		border-radius: 6px;
	}
	.container .content a img
	{
		height: 20px;
		vertical-align: top;
		margin-right: 6px;
	}
	.container .content a:hover
	{
		background: #E6E3E3;
	}
</style>