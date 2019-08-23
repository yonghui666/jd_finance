<template>
  <Zpanel cname="zpanel" title="定期精选" subtitle="查看更多理财>">
    <!-- <Slider :items="items" cname="slider" :options="options"></Slider> -->
    <section class="slider">
      <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in list" :key="item.title">
          <div class="dq_item">
            <h5>{{item.title}}</h5>
            <label> {{item.label}}</label>
            <h2>{{item.lilv}}</h2>
            <p>{{item.txt}}</p>
          </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" v-if="options.pagination"></div>
    </swiper>
    </section>
  </Zpanel>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Zpanel from '../core/Zpanel'
import Slider from '../core/slider'

export default {
  components:{
    Zpanel,swiper,
    swiperSlide
  },
  data(){
    return{
      options:{
        slidesPerView: 2.4,
        spaceBetween: 30,
        freeMode: true,
          notNextTick: false,

      },
      list:[
        {title:'月月盈',label:'每日限量',lilv:'3.3%',txt:'七日年化利率'},
        {title:'年年盈',label:'每日限量',lilv:'31.3%',txt:'七日年化利率'},
        {title:'月月盈',label:'每日限量',lilv:'3.3%',txt:'七日年化利率'},
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '~swiper/dist/css/swiper.css';
  .slider{
    width: 100%;
    box-sizing: border-box;
  }
</style>
<style lang="scss" scoped>
  @import '../../css/element.scss';

  .zpanel{
    @include list(row);
    .slider{
      padding: 10px 30px 30px 30px;
      .dq_item{
      box-shadow: 0 0 7px #ccc;
      border: 1px solid #ccc;
      font-size: 26px;
      height: 222px;
      // width: 220px;
      padding: 20px 10px;
      h2{
        color:red;
        font-size: 30px;
        line-height: 48px;
      }
      label{
        background-color: blue;
        color: #fff;
        line-height: 30px;
        border-radius: 20px;
        text-align: center;
        padding: 0 5px;
        line-height: 48px;
        font-size: 20px;
      }
      p{
        color:gray;
        font-size: 20px;
      }
    }
    }
  }
</style>