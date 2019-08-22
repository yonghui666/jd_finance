<template>
  <div id="app">
    <router-view/>
    <!-- <headed></headed> -->
  </div>
</template>

<script>
// import Headed from './components/Headed'
export default {
  name: 'app',
  components:{
    // Headed
  }
}
</script>

<style lang="scss" >
  #app{
    h1{color:'red';font-size: 144px;}
  }
</style>
