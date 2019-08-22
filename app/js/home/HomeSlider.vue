<template>
  <article>
    <Slider :items="items" :cname="$style.slider"></Slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in entres" :key="item.img">
        <router-link :to="item.href">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
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
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/54124/12/3394/140400/5d11e389Ee12d74f3/f3cba452b6470938.png?width=750&height=320'
        },
        {
          href:'home',
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/39408/33/14482/94393/5d56863eEc96b5269/563650ec7c912fbc.jpg?width=750&height=320'
        }
      ],
      entres:[
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          href:'home',
          title:'优惠劵'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          href:'home',
          title:'领福利'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          href:'home',
          title:'工资理财'
        },
        {
          img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
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
  .list{
    @include list(row);
    justify-content: space-around;
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    .item{
      text-align: center;
      img{
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color:#666;
      }
    }
  }
</style>