<template>

  <div class="page-home">
    <router-view></router-view>
    <van-tabbar v-model="active" route  active-color="#f97187" inactive-color="#000">

      <van-tabbar-item icon="home-o" to="/index">热映</van-tabbar-item>
      <van-tabbar-item icon="search" dot to="/cinema">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" to="/login">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:'movie'
    };
  }
};
</script>


<style lang="scss">
.page-home {
  display: flex;
  height: 100%;
  flex-direction: column;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }

}
</style>

