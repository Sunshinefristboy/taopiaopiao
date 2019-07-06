<template>
  <van-list
    v-model="filmLoading"
    @load="getFilmList"
    :finished="isFinished"
    finished-text="已经是最后一页了"
    ref="myBox"
  >
    <div class="page-home-movie">
      <div class="top">
        <div class="left">
          <img src="@/assets/imges/logo.jpg" alt>
          <span>北京<i class="iconfont icon-jiantouarrow486"></i></span>
        </div>
        <div class="right">
          <van-tabs v-model="curFilmType" line-width="20px" title-active-color="#ef3d5d">
            <van-tab title="正在热映">
              <Filmlist filmType="nowPlaying" :list="filmList"/>
            </van-tab>
            <van-tab title="即将上映">
              <Filmlist filmType="comingSoon" :list="filmList"/>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
import Filmlist from "@/components/filmlist";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "movie",

  components: {
    Filmlist
  },

  computed: {
    ...mapState("films", ["filmList"]),
    ...mapGetters("films", ["isFinished"]),

    curFilmType: {
      get() {
        return this.$store.state.films.curFilmType;
      },

      set(value) {
        this.$store.commit({
          type: "films/setCurFilmType",
          filmType: value
        });
      }
    },

    filmLoading: {
      get() {
        return this.$store.state.films.filmLoading;
      },
      set(value) {
        this.$store.commit({
          type: "films/setFilmLoading",
          loading: value
        });
      }
    }
  },

  watch: {
    curFilmType(newVal, oldVal) {
      this.$refs["myBox"].$el.scrollTop = 0;
      this.getFilmList(true);
    }
  },

  methods: {
    ...mapActions("films", ["getFilmList"]),

    created() {

    },

    mounted() {

    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/mixins.scss";
@import "~@/assets/px2rem.scss";

.page-home-movie {
  height: 100%;
  padding: 0 px2rem(16);
  .top {
    height: 100%;
    width: 100%;
    // background: yellow;
    position: relative;
    .left {
      z-index: 100;
      position: absolute;
      margin-top: px2rem(12);
      width: px2rem(76);
      height: px2rem(26);
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      // background: red;
      img {
        display: block;
        padding-right: 10px;
      }
      span {
        font-size: 14px;
        position: relative;
        .iconfont {
          font-size: 16px;
          position: absolute;
          top: 0;
        }
      }
    }
    .right {
      width: 100%;
      .van-tabs {
        width: 100%;
        position: relative;
        .van-tabs__wrap {
          width: px2rem(160);
          position: absolute;
          left: px2rem(160);
          top: px2rem(2);
        }
      }
    }
  }
}
</style>

