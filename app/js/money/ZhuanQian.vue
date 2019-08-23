<template>
  <div class="zhuanqian">
    <Headed></Headed>
    <ZSlider></ZSlider>
    <Renwu></Renwu>
    <jingxuan></jingxuan>
    <baitiao></baitiao>
    <dingqi></dingqi>
    <baoxian></baoxian>
    <tuijian></tuijian>
    <Footed></Footed>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Headed from '../components/Headed.vue'
import Footed from '../components/Footed.vue'
import Navbar from '../components/Navbar.vue'

import ZSlider from './ZSlider'
import Renwu from './renwu'
import jingxuan from './jingxuan'
import baitiao from './baitiao'
import dingqi from './dingqi'
import baoxian from './baoxian'
import tuijian from './tuijian'
export default {
  components:{
    Headed,Footed,Navbar,ZSlider,Renwu,
    jingxuan,baitiao,dingqi,baoxian,tuijian
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';
</style>