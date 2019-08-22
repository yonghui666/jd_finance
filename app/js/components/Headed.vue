<template>
  <header :class="$style.header">
    <span :class="$style.left">
      <em>登陆</em>&nbsp;|&nbsp;<em>注册</em>
    </span>
    <btn :cname="$style.btnDownload">APP下载</btn>
  </header>
</template>

<script>
import btn from '../core/btn'
export default {
  name:'headed',
  components: {
    btn,
  }
}
</script>

<style lang="scss" module>
  .header{
    color:#666;
    font-size: 32px;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0; left: 0; right: 0;
    background: #fff url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3054632585,3991789366&fm=26&gp=0.jpg') center no-repeat ;
    background-size: auto 100%;
    z-index: 100;

    .left{
      font-size: 28px;
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 18px;

    }
    .btnDownload{
      float: right;
      font-size: 24px;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      padding: 0;
      border-radius: 4px;
      margin: 18px 24px 0 0;
    }
  }
</style>