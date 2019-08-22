<template>
  <div>
    <Panel :cname="$style.panel" title="金融借贷">
      <div :class="$style.jiedai_content">
        <router-link to="/nowrite">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
        </router-link>
      </div>
    </Panel>
    <Panel :cname="$style.panel" title="精选理财">
      <div :class="$style.licai_content">
        <div :class="$style.licai_item" v-for="item in licai" :key="item.title">
          <h4>{{item.title}} <span :class="$style.subtitle">{{item.subtitle}}</span> </h4>
          <p :class="$style.lilv">{{item.lilv}}</p>
          <p :class="$style.text">{{item.text}}</p>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import Panel from '../core/panel'
export default {
  data(){
    return{
      licai:[
        {title:'定期理财',lilv:'5.6%',subtitle:'理财首选',text:'七日年化收益率'},
        {title:'小白李白',lilv:'6.6%',subtitle:'理财首选',text:'七日年化收益率'},
        {title:'定期理财',lilv:'25.6%',subtitle:'理财首选',text:'七日年化收益率'},
        {title:'定期理财',lilv:'2.6%',subtitle:'理财首选',text:'七日年化收益率'},
      ]
    }
  },
  components:{
    Panel,
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  .jiedai_content{
    img{width: 100%; padding-bottom: 20px;}
  }

  .licai_content{
    @include list(row);
    .licai_item{
      width: 50%;
      box-sizing: border-box;
      padding: 20px 20px 20px 30px;
      @include list;
      justify-content: space-around;
      h4{
        color: black;
        font-size: 28px;
        .subtitle{
        border: 1px solid pink;
        color:pink; font-size: 22px;
        padding: 4px;
        text-align: center;
        line-height: 20px;
        }
      }
      .lilv{
        color: red; font-weight: bolder;
        font-size: 33px;
        line-height: 65px;
      }
      .text{
        color:gray;
        font-size: 20px;
      }

      &:nth-child(2n){
        border-left: 1px solid #ccc;
      }
      &:nth-child(3),&:nth-child(4){
        border-top: 1px solid #ccc;
      }
    }
    
  }
}
</style>