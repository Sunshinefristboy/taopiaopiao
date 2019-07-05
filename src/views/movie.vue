<template>
<van-list
    v-model="filmLoading"
    :immediate-check="true"
    @load="getFilmList"
    :finished="isFinished"
     finished-text="别拉了，放开我"
    ref="myBox"
  >
  <div class="movie">
    <div class="tpp-nav">
    <div class="city-fixed" @click="handleGoCity" >
        <span>{{ curCityInfo && curCityInfo.name }}</span>
        <i class="iconfont icon-xiala"></i>
    </div>
    <van-tabs v-model="curFilmType" line-width="30px" line-height="5px" title-active-color="#ff2e62"
    title-inactive-color="#000" class="tpp-nav-right" sticky
    >
      <van-tab title="正在热映">
        <filmlist filmType="nowPlaying" :list="filmList" />
        
      </van-tab>
      <van-tab title="即将上映">
        <filmlist filmType="comingSoon" :list="filmList" />
      </van-tab>
    </van-tabs>
    </div>
  </div>
  </van-list>
</template>

<script>
import Swiper from "swiper";
import filmlist from "@/components/filmlist"
import { mapState, mapActions, mapGetters } from "vuex";
// import Swiper from "swiper";
export default {
  
  name: "movie",
  components:{
    filmlist
  },
  computed: {
    ...mapState("film", ["filmList"]),
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
      this.getFilmList(true);
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
    // this.getFilmList()
  }

  // mounted() {
  //   this.initSwiper();
  // }
};
</script>

<style lang="scss">
@import "~@/assets/px2rem.scss";
@import "./movie.scss";
// .tpp-nav{
//   width: px2rem(375);
//   display:flex
// }
.city-fixed {
  
    position: absolute;
    top: px2rem(7);
    left: px2rem(0);
    color: red;
    z-index: 200;
    font-size: 16px;
    background: rgba(216, 240, 5, 0.2);
    height: px2rem(20);
    // width: px2rem(210);
    line-height: px2rem(20);
    border-radius: px2rem(15);
    text-align: center;
    padding: px2rem(5);
    

    i {
      font-size: 18px;
    }
  }
  .tpp-nav-right{
    
  }
</style>
