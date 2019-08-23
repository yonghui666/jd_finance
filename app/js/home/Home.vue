<template lang="html">
    <div :class="$style.home">
        <Headed></Headed>
        <HomeSlider></HomeSlider>
        <Novice></Novice>
        <Licai></Licai>
        <Goods></Goods>
        <Footed></Footed>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Headed from '../components/Headed.vue'
import Footed from '../components/Footed.vue'
import Navbar from '../components/Navbar.vue'
import HomeSlider from './HomeSlider'
import Novice from './Novice'
import Licai from './Licai'
import Goods from './Goods'

export default {
  name:'index',
  components:{
    Headed,HomeSlider,Novice,Licai,Goods,Footed,Navbar
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
  }
</style>
