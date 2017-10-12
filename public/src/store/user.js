import Vue from 'vue'

export const USER_SIGNIN = 'user_signin' //登录成功 指向 方法
export const USER_SIGNOUT = 'user_signout' //退出登录 指向 方法

export default {

    state: JSON.parse(sessionStorage.getItem('user')) || {},
    // 同步操作
    mutations: {
        // 方法名 建议大写
        USER_SIGNIN(state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            // es6 新增方法 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象
            Object.assign(state, user);
        },
        USER_SIGNOUT(state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    // 异步操作
    actions: {
        // {commit} 解构赋值 直接获取属性方法
        user_signin({commit}, user) {
            commit('USER_SIGNIN', user)
        },
        // {commit} 解构赋值 直接获取属性方法
        user_signout({commit}) {
            commit('USER_SIGNOUT')
        }
    }
}

