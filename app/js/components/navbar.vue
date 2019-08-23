<template>
  <Panel :cname="$style.panel">
    <div :class="$style.navbar">
      <!-- <div :class="$style.nav_item" v-for="item in navlist" :key="item.title"> -->
        <router-link :to="item.href" tag="div" :class="$style.nav_item" v-for="item in navlist" :key="item.title">
          <img :src="item.icon" alt="">
          <p>{{item.title}}</p>
        </router-link>
      <!-- </div> -->
    </div>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  name:'navbar',
  data(){
    return{
      navlist:[
        {title:'首页', href:'/nowrite', icon:'https://img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60'},
        {title:'李白', href:'/nowrite', icon:'https://img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60'},
        {title:'白条', href:'/nowrite', icon:'https://img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60'},
        {title:'众筹', href:'/nowrite', icon:'https://img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60'},
        {title:'我的', href:'/nowrite', icon:'https://img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60'},
      ]
    }
  },
  components:{
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';

  .panel{
    @include panel;
    margin: 0;
    width: 100%;
    background-color: #fff;
    position: fixed;
    left: 0; bottom: 0;
    >h4{display: none;}
    .navbar{
      display: flex;
      justify-content: space-around;
      width: 100%;
      .nav_item{
        height: 100px;
        width: 20%;
        @include list;
        align-items: center;
        justify-content: center;
        font-size: 23px;
        p{
          color: #333;
        }
        img{
          width: 45px;
        }
      }
    }
  }
</style>