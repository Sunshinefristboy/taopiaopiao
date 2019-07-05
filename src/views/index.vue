<template>
  <div class="index">
    <router-view />
    <van-tabbar v-model="active" route  active-color="red"
  inactive-color="#000" class="tpp_index">
      <van-tabbar-item icon="home-o" to="/index">热映</van-tabbar-item>
      <van-tabbar-item icon="search" dot to="/cinema">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" to="/login">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      active:'movie'
    };
  }
};
</script>
<style lang="scss">
.tpp_index{
  
}
</style>

