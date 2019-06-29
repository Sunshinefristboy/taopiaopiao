<template>
  <div class="login">
    <div >
      <img src="../assets/login.png" alt="" class="logo">
    </div>
    <!-- <van-cell-group> -->
      <van-field
        v-model="username"
        clearable
        placeholder="手机号/邮箱/会员名"
      />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    <!-- </van-cell-group> -->
    <div>
      <a href="#">短信验证码登录</a>
      <a href="#">免费注册 </a>
      <van-button plain type="primary">短信验证码登录</van-button>
      <van-button plain type="danger">免费注册</van-button>
    </div >
    <div>
      <van-button round type="danger" size="large" >登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
  name: "login"
};
</script>
<style lang='scss'>
  @import '../assets/px2rem.scss';
  .van-cell{
      border-bottom: 1px  solid red;
      margin: px2rem(10) auto
  }
  .logo{
        display: block;
        width: px2rem(80) !important;
        height: px2rem(80);
        margin: 0 auto
          }
  .van-button{
    margin: 0 10px auto
  }
</style>
