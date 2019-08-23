<template>
  <footer :class="$style.foot_container">
    <div :class="$style.foot_img">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/12124/17/11858/46303/5c92faf7E65f4674a/94bc59efd2d056e9.jpg?width=750&height=200" alt="">
    </div>
    <div :class="$style.download">
      <div :class="$style.download_item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90" alt="">
        <p>客户端</p>
      </div>
      <div :class="$style.download_item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90" alt="">
        <p>PC端</p>
      </div>
      <div :class="$style.download_item">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90" alt="">
        <p>网页端</p>
      </div>
    </div>
    <ul :class="$style.foot_list">
      <li>AKDJJ@京东版权所有</li>
      <li>投资有风险，购买须谨慎</li>
      <li>京东金融服务协议</li>
      <li>京东金融隐私政策</li>
    </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
  .foot_container{
    margin-top: 20px;
    margin-bottom: 100px;
    .foot_img{
      img{width: 100%;}
    }
    .download{
      @include list(row);
      padding: 22px;
      justify-content: space-around;
      .download_item{
        @include list;
        align-items: center;
        width: 33.333%;
        font-size: 25px;
        img{
          width: 90px;
          height: 90px;
          margin-bottom: 5px;
        }
      }
    }
    .foot_list{
      text-align: center;
      line-height: 65px;
      font-size: 25px;
      color: #333;
      li{
        border-top: 1px solid #ccc;
      }
    }
  }

</style>