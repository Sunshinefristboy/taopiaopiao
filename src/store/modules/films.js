import Axios from "axios";



const state={
    bannerList:[]
};

const getters={};

const mutations={
    setBannerList(state,payload){

        // console.log(payload);
        
        state.bannerList=payload.list
    }
};

const actions={
    getBannerList({commit}){
        Axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=1607992',{
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611214209195524981699"}',
                "X-Host": "mall.cfg.common-banner"

            }
        }).then(response => {
            let res =response.data;
            // console.log(res);
            
            if(res.status===0){
                commit({
                    type:'setBannerList',
                    list:res.data
                })
            }else{
                alert(res.msg)
            }
        })
    }  
};
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
