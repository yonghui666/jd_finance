<template>
  <Zpanel cname="zpanel" title="白条" subtitle="年轻不留白>" img="https://img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200">
    <section class="baitiao">
      <div class="lbox">
        <div>小白信用分</div>
        <p>登陆查看</p>
      </div>
      <div class="rbox">
        <div class="rbox_item" v-for="item in baitiao" :key="item.img">
          <img :src="item.img" alt="">
          <p>{{item.msg}}</p>
        </div>
      </div>
    </section>
  </Zpanel>
</template>

<script>
import Zpanel from '../core/Zpanel'

export default {
  components:{
    Zpanel
  },
  data(){
    return{
      baitiao:[
        {msg:'白条',img:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56'},
        {msg:'环境',img:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56'},
        {msg:'好看',img:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56'},
        {msg:'今天',img:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56'},
        {msg:'白条',img:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56'},
        {msg:'白条',img:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/element.scss';
  .zpanel{
    .baitiao{
      padding: 0 30px;
      font-size: 20px;
      @include list(row);
      justify-content: space-between;
      .lbox{
        flex: 1;
        box-shadow: 0 0 7px #ccc;
        border: 1px solid #ccc;
        padding: 20px ;
        margin-right: 10px;
        div{
          border-radius: 50%;
          height: 99px; width: 120px;
          border: 15px solid #eee;
          text-align: center;
          line-height: 83px;
          color: #d4b575;
          margin: 0 auto;
        }
        p{
          margin-top: 8px;
          line-height: 40px;
          background-color: #d4b575;
          text-align: center;
          color:white;
          border-radius: 30px;
        }
      }
      .rbox{
        flex:2;
        box-shadow: 0 0 7px #ccc;
        border: 1px solid #ccc;
        @include list(row);
        .rbox_item{
          @include list;
          align-items: center;
          justify-content: center;
          width: 33.33%;
          p{
            margin-top: 4px;
          }
        }
      }
    }
  }
</style>