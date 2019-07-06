import axios from "axios";
import { Toast } from "vant";

const state = {
  filmList: [],
  curFilmType: 0, // 当前影片的类型
  filmLoading: false, // 影片加载状态
  pageNum: 1, // 页码
  pageSize: 10, // 每页显示条数
  total: 1 // 总条数
};

const getters = {
  // 总页数
  totalPage (state) {
    return Math.ceil(state.total / state.pageSize)
  },

  isFinished (state, getters) {
    return state.pageNum > getters.totalPage;
  }
};

const mutations = {
  setBannerList(state, payload) {
    state.bannerList = payload.list;
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

const actions = {
  getFilmList({ commit, state, rootState },  isChangeFilmType) {
    if (isChangeFilmType) {
      commit({ type: "setPageNum", num: 1 });
    }
    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios
      .get("https://m.maizuo.com/gateway", {
        params: {
          cityId: rootState.city.curCityId,
          pageNum: state.pageNum,
          pageSize: state.pageSize,
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
            list: isChangeFilmType
            ? res.data.films
            : [...state.filmList, ...res.data.films],
            total: res.data.total
          });
        } else {
          Toast(res.msg);
        }
        commit({ type: "setFilmLoading", loading: false });
        commit({ type: "setPageNum", num: state.pageNum + 1 });
        Toast.clear();
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
