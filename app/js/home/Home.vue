<template lang="html">
    <div :class="$style.home">
        <Headed></Headed>
        <HomeSlider></HomeSlider>
        <Novice></Novice>
        <Licai></Licai>
        <Goods></Goods>
    </div>
</template>

<script>
import Headed from '../components/Headed.vue'
import HomeSlider from './HomeSlider'
import Novice from './Novice'
import Licai from './Licai'
import Goods from './Goods'

export default {
  name:'index',
  components:{
    Headed,HomeSlider,Novice,Licai,Goods
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
  }
</style>
