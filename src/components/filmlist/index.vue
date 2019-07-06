<template>
  <div class="filmlist-all">
    <div class="mz-filmlist" v-for="(item, index) in list" :key="index">
      <div class="mz-filmlist__left">
        <div class="__left-left">
          <img :src="item.poster" alt="">
        </div>
        <div class="__left-right">
          <ul>
            <li>{{ item.name }} <span>{{ item.filmType.name }}</span></li>
            <li class="li-2" v-show="filmType === 'comingSoon'"><span>{{ item.filmId }}</span> 人想看</li>
            <li class="li-3" v-show="filmType === 'nowPlaying'">淘票票评分 <span>{{ item.grade }}</span></li>
            <li>导演：{{ item.director }}</li>
            <li style="height: 20px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">主演：{{ item.actors | actorFormat }}</li>
            <li v-show="filmType === 'nowPlaying'">{{ item.nation }} | {{ item.runtime }}分钟</li>
          </ul>
        </div>
      </div>
      <div class="mz-filmlist__right">
        <a href="javascript:;" style="background:#ff3890" v-show="filmType === 'nowPlaying'">购票</a>
        <a href="javascript:;" style="background:#0187e6" v-show="filmType === 'comingSoon'">预售</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    },
    filmType: String
  },

  filters: {
    actorFormat(actors = []) {
      let tmp = actors.map(item => item.name);
      return tmp.length ? tmp.join(" ") : "暂无主演";
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/mixins.scss";
@import "~@/assets/px2rem.scss";

.filmlist-all {
  height: 100%;
  .mz-filmlist {
    height:  px2rem(112);width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: px2rem(16) 0;
    overflow: hidden;
    &__left {
      display: flex;
      flex-flow: row n
      owrap;
      width: 100%;
      .__left-left {
        img {
          width: px2rem(64);height: px2rem(94);
          display: block;
        }
      }
      .__left-right {
        width: px2rem(200);
        ul {
          color: #626262;
          font-size: 12px;
          line-height: 22px;
          padding-left: px2rem(10);
          li:nth-child(1) {
            font-size: 14px;
            color: #000100;
            span {
              display: inline-block;
              width: px2rem(20);height: px2rem(16);
              background: #b0b1ab;
              color: white;
              font-size: 12px;
              text-align: center;
              line-height: px2rem(16);
            }
          }
          .li-2 {
            span {
              display: inline-block;
              color: #ea9c4a;
            }
          }
          .li-3 {
            span {
              display: inline-block;
              color: #ea9c4a;
            }
          }
        }
      }
    }
    &__right {
      display: flex;
      align-items: center;
      a {
        font-size: 12px;
        color: white;
        text-align: center;
        line-height:  px2rem(28);
        display: block;
        width: px2rem(50);height: px2rem(28);
        // background: #ff3890;
        border-radius: px2rem(120);
      }
    }
  }
}
</style>



