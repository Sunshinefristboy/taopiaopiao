import axios from "axios";
import router from '@/router'
import { Toast } from "vant";

const state = {
  login_info:null
};

const getters = {
  
 
};

const mutations = {
  setinfo(state, payload) {
    state.login_info = payload.info;
  }
  
};

const actions = {
  login_in(context,payload){
    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios.post("http://localhost:9090/sign-in" ,payload).then((respone)=>{
      let res=respone.data;
      if(res.code===0){
        context.commit({type:"setinfo",info:res.data})
        router.push('/index')
      }else{
        setTimeout(()=>{Toast(res.msg)},2000)
        
      }
      Toast.clear()
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
