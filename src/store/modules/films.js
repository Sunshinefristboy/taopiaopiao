import Axios from "axios";
import {Toast} from 'vant'




const state={
    bannerList:[],
    filmList:[],
    curFilmType:0,
    filmLoading:false,
    pageNum:1,
    pageSize:10,
    total:1
};

const getters={
    totalPage(state){
        return Math.ceil(state.total/state.pageSize)
    },
    isFinished(state,getters){
        return state.pageNum > getters.totalPage
    }
};

const mutations={
    setBannerList(state,payload){

        // console.log(payload);
        
        state.bannerList=payload.list
    },
    setFilmList(state, payload) {
        state.filmList = payload.list;
        state.total = payload.total;
      },
    
      setCurFilmType(state, payload) {
        state.curFilmType = payload.filmType;
      },
    
      setFilmLoading(state, payload) {
        state.filmLoading = payload.loading;
      },
    
      setPageNum(state, payload) {
        state.pageNum = payload.num;
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
    },
    getFilmList({ commit, state }) {
        // 请求之前， loading
        Toast.loading({ duration: 0, mask: true, message: "加载中..." });
        Axios
          .get("https://m.maizuo.com/gateway", {
            params: {
              cityId: 440300,
              pageNum: state.pageNum,
              pageSize: state.pageSize,
              // type = 1 正在热映
              // type = 2 即将上映
              type: state.curFilmType === 0 ? 1 : 2,
              k: 66161
            },
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
              "X-Host": "mall.film-ticket.film.list"
            }
          })
          .then(response => {
            let res = response.data;
            if (res.status === 0) {
              commit({
                type: "setFilmList",
                // list: res.data.films,
                // 追加
                // list: state.filmList.concat(res.data.films), ✅
                // list: state.filmList.push(res.data.films),   ❎
                // list: state.filmList.push(...res.data.films), ✅
                list: [...state.filmList, ...res.data.films],
                total: res.data.total
              });
            } else {
              Toast(res.msg);
            }
    
            // 1. 数据加载完成，需要将 filmLoading 设置为 false
            commit({ type: "setFilmLoading", loading: false });
            // 2. 数据加载完成，需要将页码++
            commit({ type: "setPageNum", num: state.pageNum + 1 });
            // 3. 判断是否是最后一页 ，已经交给上面的 isFinised 来处理了
            // 4. 数据追击，而不是赋值。
            Toast.clear();
          });
      } 
};
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
