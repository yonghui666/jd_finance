<template>
  <Zpanel title="赏金任务" subtitle="查看更多任务 > " cname="zpanel" img="https://img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200">
    <Slider :items="items" cname="slider" :options="options"></Slider>
  </Zpanel>
</template>

<script>
import Zpanel from '../core/Zpanel'
import Slider from '../core/slider'
export default {
  data(){
    return{
      items:[
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t30418/166/1039421072/8983/a6f90d5b/5c04eccbN581f6287.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t30418/166/1039421072/8983/a6f90d5b/5c04eccbN581f6287.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t30418/166/1039421072/8983/a6f90d5b/5c04eccbN581f6287.png?width=210&height=260'},
        {img:'https://img12.360buyimg.com/jrpmobile/jfs/t30418/166/1039421072/8983/a6f90d5b/5c04eccbN581f6287.png?width=210&height=260'},
      ],
      options:{
        slidesPerView: 3.4,
        spaceBetween: 30,
        freeMode: true,
      }
    }
  },
  components:{
    Zpanel,Slider
  }
}
</script>

<style lang="scss" scoped>
  .slider{
    padding: 0 30px;
  }
</style>