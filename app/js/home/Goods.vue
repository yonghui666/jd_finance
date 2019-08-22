<template>
  <Panel cname="panel" title="新品推荐">
    <div class="many">更多推荐 > </div>
    <Slider cname="slider" :options="options" :items="items" /> 
  </Panel>
</template>

<script>
import Panel from '../core/panel'
import Slider from '../core/slider'
export default {
  data(){
    return{
      options:{
        slidesPerView: 2.4,
        spaceBetween: 30,
        freeMode: true,
      },
      items:[
        {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t23761/58/804203423/807764/df1bccbb/5b436d85N86172962.png'},
        {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/81446/15/7540/342306/5d5a03a0E586386bf/3d6554bbb9f08883.jpg'},
        {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/3916/8/16018/104353/5be04406Efad64227/30de5d58e0a9c814.jpg'},
        {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t23761/58/804203423/807764/df1bccbb/5b436d85N86172962.png'},
        {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/81446/15/7540/342306/5d5a03a0E586386bf/3d6554bbb9f08883.jpg'},
      ]
    }
  },
  components:{
    Panel,Slider
  }
}
</script>

<style lang="scss" >
  @import '../../css/element.scss';
.panel{
  @include panel;
  .slider{
    .swiper-container{
      padding: 0 30px;
    }
  }
}
</style>

<style lang="scss" scoped>
  .panel{
    position: relative;
    .many{
      position: absolute;
      right: 33px; top: 43px;
      font-size: 24px;
    }
  }
</style>