<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{name: item.href}">
          <img :src="item.img">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props:{
    options: {
      type: Object,
      default(){
        return{
          autoplay: 3000,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false,
        }
      }
    },
    cname:{
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>

<style lang="scss">
  @import '~swiper/dist/css/swiper.css';
</style>