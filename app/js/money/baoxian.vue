<template>
  <Zpanel cname="zpanel" title="保险保障">
    <div class="baoxian">
      <section>
        <div class="lbox">
          <p class="tuijian">今日推荐</p>
          <h2>100万</h2>
          <p class="msg">京东账户安全险</p>
          <p class="look">立即查看</p>
        </div>
        <div class="rbox">
        <div class="rbox_item" v-for="item in baoxian" :key="item.img">
          <img :src="item.img" alt="">
          <p>{{item.msg}}</p>
        </div>
      </div>
      </section>
      <div class="bx_img">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/12124/17/11858/46303/5c92faf7E65f4674a/94bc59efd2d056e9.jpg?width=750&height=200" alt="">
      </div>
      <h4>热销保险</h4>
      <div cnaem="slider">
        <Slider :items="items" cname="slider" :options="options"></Slider>
      </div>
    </div>

  </Zpanel>
</template>

<script>
import Zpanel from '../core/Zpanel'
import Slider from '../core/slider'

export default {
  components:{
    Zpanel,Slider
  },
  data(){
    return{
      baoxian:[
        {msg:'白条',img:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56'},
        {msg:'环境',img:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56'},
        {msg:'好看',img:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56'},
        {msg:'今天',img:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56'},
        {msg:'白条',img:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56'},
        {msg:'白条',img:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56'},
      ],
      options:{
        slidesPerView: 3.4,
        spaceBetween: 30,
        freeMode: true,
      },
      items:[
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/element.scss';
  .zpanel{
    .baoxian{
      section{
      padding: 0 30px 30px 30px;
        display: flex;
        justify-content: space-between;
        .lbox{
          box-shadow: 0 0 6px #ccc;
          
          flex: 1;
          margin-right: 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .tuijian{
            font-size: 18px;
            background-color: #000;
            color: #fff;
            line-height: 20px;
            text-align: center;
          }
          h2{color: #1bd5c7;}
          .msg{
            font-size: 20px;
          }
          .look{
            background-color: #1bd5c7;
            color: white;
            line-height: 30px;
            text-align: center;
            border-radius: 20px;
            font-size: 20px;
          }
        }
        .rbox{
        flex:2;
        box-shadow: 0 0 7px #ccc;
        border: 1px solid #ccc;
        padding: 20px 0;
        @include list(row);
        .rbox_item{
          @include list;
          align-items: center;
          justify-content: center;
          width: 33.33%;
          font-size: 23px;
          margin-bottom: 10px;
          padding: 5px 0;
          p{
            margin-top: 4px;
          }
          img{
            width: 55px;
          }
        }
      }
      }

      .bx_img{
        width:100%;
        img{width:100%;}
      }
      h4{
        line-height: 30px;
        padding: 30px;
      }
      .slider{
        img{width:100%;}
      }
    }
  }
</style>