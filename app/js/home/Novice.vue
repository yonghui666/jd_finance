<template>
  <Panel title="新手特权" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h5>下载App <span :class="$style.red">送888大礼包</span></h5>
        <p :class="$style.gray">新手专享</p>
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90" alt="">
      </div>
      <div :class="$style.item">
        <div :class="$style.item_list">
          <div :class="$style.item_txt">
            <h5><span :class="$style.red">领128元新手大礼包啊哈哈哈哈哈</span></h5>
            <p :class="$style.gray">立即开头</p>
          </div>
          <div :class="$style.item_img">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90" alt="">
          </div>
        </div>
        <div :class="$style.item_list">
          <div :class="$style.item_txt">
            <h5>打白条<span :class="$style.red">享免息</span></h5>
            <p :class="$style.gray">立即开通</p>
          </div>
          <div :class="$style.item_img">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90" alt="">
          </div>
        </div>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  components:{
    Panel,
  }
}
</script>

<style lang="scss" module >
  .panel{
    margin-top: 20px;
    .content{
      border-top: 1px solid #ccc;
      display: flex;
      h5{
        font-size: 26px;
        color: black;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .red{
        color:red;
        
      }
      .gray{color:gray; font-size: 20px;line-height: 40px;}
      .item{
        width: 50%;
        img{
          width: 90px;
          height: 90px;
        }
        &:first-child{
          text-align: center;
          padding: 20px;
          border-right: 1px solid #ccc;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: center;
        };
        &:last-child{
          .item_list{
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:first-child{
              border-bottom: 1px solid #ccc;
            }
            .item_txt{
              width: 70%;
            }
          }
        }
      }
    }
  }
</style>