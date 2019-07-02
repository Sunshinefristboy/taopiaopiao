<template>
  <div class="movie">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imgUrl" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <h1>热映首页</h1>

  </div>
</template>

<script>
import Swiper from "swiper";
import { mapState, mapActions } from "vuex";
// import Swiper from "swiper";
export default {
  name: "movie",
  computed: {
    ...mapState("film", ["bannerList"])
  },

  watch: {
    bannerList() {
      // if (this.mySwiper) {
      //   // 已经被初始化
      //   this.mySwiper.destroy();
      // }
      this.$nextTick(() => {
        this.initSwiper();
        
      });
    },
  },
  methods: {
    ...mapActions("film", ["getBannerList"]),
    initSwiper() {
      let mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
   
  created() {
    this.getBannerList()
    
  },

  // mounted() {
  //   this.initSwiper();
  // }
};
</script>

<style lang="scss">
@import "~@/assets/px2rem.scss";
.swiper-container {
  width: 100%;
  height: px2rem(210);
}
</style>