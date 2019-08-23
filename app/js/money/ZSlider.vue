<template>
  <article>
    <Slider :items="items" :cname="$style.slider"></Slider>
    <section :class="$style.qiandao">
      <div :class="$style.login">
        <div>会员等级</div>
        <div>立即登录，马上赚钱</div>
        <div>签到</div>
      </div>
    </section>
    <div :class="$style.hr"></div>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in entres" :key="item.img">
        <router-link :to="item.href">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
      <div :class="$style.list_img">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/50201/4/7570/92412/5d5258cdE8ba90360/f676e28d6896f13f.jpg?width=750&height=200" alt="">
      </div>
    </section>
  </article>
</template>

<script>
import Slider from '../core/slider'
export default {
  data(){
    return{
      items:[
        {
          href:'home',
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/35731/27/14378/124844/5d400a99E08530579/cba4b33a090f8ed2.png?width=750&height=400'
        },
        {
          href:'home',
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/71999/27/5999/84772/5d410117Ef5ea957c/da8d6e5d758774fd.jpg?width=750&height=400'
        }
      ],
      entres:[
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/69506/40/2501/5076/5d0c2ff7E903b5e99/5333b1c655b4c7bf.png?width=90&height=90',
          href:'home',
          title:'优惠劵'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/69506/40/2501/5076/5d0c2ff7E903b5e99/5333b1c655b4c7bf.png?width=90&height=90',
          href:'home',
          title:'领福利'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          href:'home',
          title:'工资理财'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/69506/40/2501/5076/5d0c2ff7E903b5e99/5333b1c655b4c7bf.png?width=90&height=90',
          href:'home',
          title:'优惠劵'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          href:'home',
          title:'优惠劵'
        },

      ],
    }
  },
  components:{
    Slider
  }
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .slider{
    margin-top: 100px;
    img{
      width: 100%;
    }
  }

  .qiandao{
    background-color: #fff;
    position: relative;
    height: 100px;
    width: 100%;
    .login{
      background-color: #fff;
      height: 100px;
      width: 90%;
      position: absolute;
      left: 33px; top: -32px;
      z-index: 101;
      font-size: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      >div{
        &:nth-child(1),&:nth-child(3){
        background-color: orange;
        line-height: 50px;
        color: #fff; font-weight: 300;
        box-shadow: 0 0 7px #ccc;
        text-align: center;
        padding: 4px 8px;
        }
        &:nth-child(2){
          color: orange;
        }
        &:nth-child(3){
          border-radius: 20px;
          width: 75px;
        }
      }
    }
  }

  .list{
    @include list(row);
    justify-content: space-around;
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    .item{
      text-align: center;
      img{
        width: 77px;
        height: 77px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color:#666;
      }
    }
    .list_img{
      width: 100%;
      img{width: 100%;}
      margin: 20px 0 ;
    }
  }
  .hr{
    width: 100%;
    height: 20px;
    background-color: #eee;
  }
</style>