<template>
  <div class="index">
    <router-link to="/home" class="tohome"><img src="@/assets/logo/logo-y.png"></router-link>
    <section class="center">
      <div><img src="@/assets/logo/logo.png"></div>
      <div class="desc">每天獲取來自網絡的精美圖片</div>
      <div class="enter"><router-link to="/paper/list">進入moju.paper</router-link></div>
      <article>
        <h2>聲明：</h2>
        <p>1.圖片均來源與網絡，僅供個人學習參考</p>
        <p>2.商業用途請聯繫我們確認版權是否允許</p>
      </article>
    </section>

    <footer>
      <div class="copyright">
        <p class="source">圖片來源：<img src="@/assets/source/baidutupian.png" class="img-1"><img src="@/assets/source/tuchong.png" class="img-2"><img src="@/assets/source/plxabay.png" class="img-3"><img src="@/assets/source/unsplash.png" class="img-4"></p>
        <a href="mailto:mojuc@outlook.com" class="contact">聯繫我們</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index
  {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url(/static/res/0001.jpg);
    background-attachment: fixed;
    background-size: 100% auto;  
    color: #fff; 
    font-size: 16px;
  }
  .tohome
  {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 120px;
  }
  .tohome img
  {
    width: 100%;
    vertical-align: top;
  }
  .center
  {
    /* margin-top: 260px; */
    margin-top: 12%;
    position: absolute;
    left: 12.5%;
  }
  .center .desc
  {
    font-size: 16px;
    line-height: 50px;
    letter-spacing: 3px;
  }
  .center .enter a
  {
    display: inline-block;
    padding: 0 20px;
    line-height: 50px;
    border: 1px solid #fff;
    color: #fff;
    text-decoration: none;
    border-radius: 16px;
    margin-top: 30px;
  }
  .center article
  {
    color: #eee;
    letter-spacing: 2px;
  }
  .center article h2
  {
    font-size: 16px;
    font-weight: normal;
    margin: 30px 0 0 0;
    line-height: 30px;
  }
  .center article p
  {
    font-size: 14px;
    line-height: 24px;
  }
  footer
  {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .copyright
  {
   padding: 0 30px;
   line-height: 48px;
   color: #eee;
  }
  .copyright .source
  {
    display: inline-block;
    vertical-align: top;
  }
  .copyright .source .img-1
  {
    height: 26px;
    vertical-align: top;
    margin-top: 5px;
    margin:5px 5px 0 5px;
  }
   .copyright .source .img-2
  {
    height: 18px;
    vertical-align: top;
    margin: 14px 5px 0 5px;
  }
  .copyright .source .img-3
  {
    height: 18px;
    vertical-align: top;
    margin: 14px 5px 0 5px;
  }
   .copyright .source .img-4
  {
    height: 28px;
    vertical-align: top;
    margin: 8px 5px 0 5px;
  }
  .copyright .contact
  {
    color: #eee;
    float: right;
    text-decoration: none;
  }
</style>
