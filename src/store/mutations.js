import getters from './getter.js';
const state = {
    isShow: true,
    isNavShow: true,
    userInfo: {}
}
const mutations = {
    showLoading: (state) => {
        state.isShow = true
    },
    hideLoading: (state) => {
        state.isShow = false
    },
    showNav: (state) => {
        state.isNavShow = true
    },
    hideNav: (state) => {
        state.isNavShow = false
    },
    setUserInfo: (state, userInfo) => {
        state.userInfo = userInfo;
    }
}

export default {
    getters,
    state,
    mutations
}
