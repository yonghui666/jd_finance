<template>
  <Zpanel cname="zpanel" title="银行精选" subtitle="更多银行服务>">
    <Slider :items="items" cname="slider" :options="options"></Slider>
  </Zpanel>
</template>

<script>
import Slider from '../core/slider'
import Zpanel from '../core/Zpanel'

export default {
  components:{
    Slider,Zpanel
  },
  data(){
    return{
      options:{
        slidesPerView: 3.4,
        spaceBetween: 30,
        freeMode: true,
      },
      items:[
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t11293/128/3052512266/21236/ff9211a7/5cde1a7bNec04b900.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t11293/128/3052512266/21236/ff9211a7/5cde1a7bNec04b900.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t11293/128/3052512266/21236/ff9211a7/5cde1a7bNec04b900.png?width=210&height=260'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/element.scss';
  .zpanel{
    .slider{
      padding: 0 30px;
      
    }
  }
</style>
<style lang="scss">
.swiper-slide{
  img{
    width: 100%;
  }
}
</style>