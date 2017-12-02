import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'

Vue.use(Vuex)

const state = { 
        user: JSON.parse(sessionStorage.getItem('user')) || {},
        users: [
            {
                id: 'name_01',
                name: '杰克帝主',
            },
            {
                id: 'name_01',
                name: '好友一号',
            }
        ],
        users2: [
            {
                id: 'name_01',
                name: '杰克帝主',
            },
            {
                id: 'name_01',
                name: '好友一号',
            }
        ],
        users3: [
            {
                id: 'name_01',
                name: '杰克帝主',
            },
            {
                id: 'name_01',
                name: '好友一号',
            }
        ],
}
    // 同步操作
const mutations = {
    // 方法名 建议大写
    USER_SIGNIN(state, user) {
        sessionStorage.setItem('user', JSON.stringify(user)) //关闭浏览器 失效
        // es6 新增方法 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象
        // console.log(state.name,'state');
        // console.dir(user,'user');
        Object.assign(state.user, user);
        // console.dir(state.user,'state');
    },
    USER_SIGNOUT(state) {
        sessionStorage.removeItem('user')
        // console.log(state.name,'state');
        // console.dir(user,'user');
        Object.keys(state).forEach(k => Vue.delete(state, k))
        // console.dir(state.user,'state');
    },
    DEL_USERS_K(state,k) {
        // 删除数据
        Vue.delete(state.users, k)
    },
    DEL_USERS_K2(state,k) {
        // 删除数据
        Vue.delete(state.users2, k)
    },
    DEL_USERS_K3(state,k) {
        // 删除数据
        Vue.delete(state.users3, k)
    }
};
// 异步操作
const actions = {
    // {commit} 解构赋值 直接获取属性方法
    user_signin({commit}, user) {
        commit('USER_SIGNIN', user)
    },
    // {commit} 解构赋值 直接获取属性方法
    user_signout({commit}) {
        commit('USER_SIGNOUT')
    },
    del_users_k({commit},k){
        commit('DEL_USERS_K', k)
    },
    del_users_k2({commit},k){
        commit('DEL_USERS_K2', k)
    },
    del_users_k3({commit},k){
        commit('DEL_USERS_K3', k)
    }

};
 // 获取状态信息
 const getters = {
    show_user_id: state => state.user.id,
 };

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    state,
    mutations,
    actions,
    getters
})
