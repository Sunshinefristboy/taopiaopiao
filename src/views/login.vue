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
    <div class="connect">
      <a href="https://login.m.taobao.com/msg_login.htm?spm=0.0.0.0&redirectURL=https%3A%2F%2Fh5.m.taopiaopiao.com%2Fapp%2Fmoviemine%2Fpages%2Fprofile%2Findex.html%3Fspm%3Da1z2r.7661904.0.0.2e32EDrdEDrd3m%26from%3Douter%26sqm%3Da1z2r.7661904.a1z2r.7661912%26title%3D%25E6%2588%2591%25E7%259A%2584">短信验证码登录</a>
      <a href="https://reg.taobao.com/member/reg/h5/fill_mobile.htm">免费注册 </a>
    </div >
    <div >
      <van-button round  size="large" :disabled="!password||!username" @click="login_in({username,password})">登录</van-button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
  name: "login",
  methods:{
    ...mapActions('login',['login_in'])
  }

};
</script>
<style lang='scss'>
  @import '../assets/px2rem.scss';
  .van-cell{
      
      margin: 0 auto
  }
  .logo{
        display: block;
        width: px2rem(80);
        height: px2rem(80);
        margin: px2rem(35) auto 0;
        
          }
  .van-button{
    margin: 45px auto;
    display: flex;
    background:-webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat ;
    width: px2rem(329);
    height: px2rem(45);
    font-size: px2rem(16);
    justify-content: center;
      .van-button__text{
        display: flex;
        
        
      }
  }
  .connect{
    margin: px2rem(22) auto 0;
    display: flex;
    width:px2rem(329);
    justify-content: space-between;
    font-size: px2rem(14);
    
      a{
        color: #000;
      }
    
    // padding: 0  px2rem(23)
  }
  .van-field__control{
    display: flex;
    margin: 0 auto;
    width: px2rem(329);
    // height: px2rem(20);
    font-size: px2rem(16);
    padding-top:px2rem(50);
    border-bottom: 1px  solid red;
  }

</style>
