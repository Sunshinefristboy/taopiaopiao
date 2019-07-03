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
    <div class="city-fixed" @click="handleGoCity" >
        <span>{{ curCityInfo && curCityInfo.name }}</span>
        <i class="iconfont icon-xiala"></i>
    </div>
    <van-tabs v-model="curFilmType" line-width="30px" line-height="5px" title-active-color="#ff2e62"
    title-inactive-color="#000"
    >
      <van-tab title="正在热映">
        <filmlist filmType="nowPlaying" :list="filmList" />
        
      </van-tab>
      <van-tab title="即将上映">
        <filmlist filmType="comingSoon" :list="filmList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Swiper from "swiper";
import filmlist from "@/components/filmlist"
import { mapState, mapActions, mapGetters } from "vuex";
// import Swiper from "swiper";
export default {
  data() {
    return {
      active: 0
    };
  },
  name: "movie",
  components:{
    filmlist
  },
  computed: {
    ...mapState("film", ["bannerList","filmList"]),
    ...mapGetters("film",["isFinished"]),
    ...mapGetters("city", ["curCityInfo"]),
    curFilmType:{
      get(){
        return this.$store.state.film.curFilmType;
      },
      set(value){
        this.$store.commit({
          type:"film/setCurFilmType",
          filmType:value
        })
      }
    },
    filmLoading:{
      get(){
        return this.$store.state.film.filmLoading;
      },
      set(value){
        this.$store.commit({
          type:"film/setFilmLoading",
          loading:value
        })
      }
    }
  },

  watch: {
    curFilmType(newVal,oldVal){
      this.getFilmList();
    },
    bannerList() {
      // if (this.mySwiper) {
      //   // 已经被初始化
      //   this.mySwiper.destroy();
      // }
      this.$nextTick(() => {
        this.initSwiper();
      });
    }
  },
  methods: {
    ...mapActions("film", ["getBannerList","getFilmList"]),
    initSwiper() {
      new Swiper(".swiper-container", {
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
    },
    handleGoCity() {
      this.$router.push("/city");
      console.log(this);
    }

  },

  created() {
    this.getBannerList();
    this.getFilmList()
  }

  // mounted() {
  //   this.initSwiper();
  // }
};
</script>

<style lang="scss">
@import "~@/assets/px2rem.scss";
@import "./movie.scss";
.swiper-container {
  width: 100%;
  height: px2rem(210);
}
.city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;

    i {
      font-size: 10px;
    }
  }

</style>
