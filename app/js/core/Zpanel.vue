<template>
  <section :class="[zpanelClass,cname]">
    <div class="head">
      <h4>{{title}}</h4>
      <p v-if="subtitle">{{subtitle}}</p>
    </div>
    <slot />
    <div class="zpanel_img" v-if="img"> 
      <img :src="img" alt="">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
  },
  data(){
    return{
      zpanelClass:'zpanel',
    }
  }
};
</script>

<style lang="scss">
  @import '../../css/element.scss';
  .zpanel{
    @include zpanel;
    
  }
</style>