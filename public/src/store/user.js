import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {

    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        // 方法名 建议大写
        USER_SIGNIN(state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            // es6 新增方法 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象
            Object.assign(state, user)
        },
        USER_SIGNOUT(state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        // {commit} 解构赋值 直接获取属性方法
        user_signin({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        // {commit} 解构赋值 直接获取属性方法
        user_signout({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}

// export default {
//     state: JSON.parse(sessionStorage.getItem('user')) || {},
//     mutations: {
//         [USER_SIGNIN](state, user) {
//             sessionStorage.setItem('user', JSON.stringify(user))
//             Object.assign(state, user)
//         },
//         [USER_SIGNOUT](state) {
//             sessionStorage.removeItem('user')
//             Object.keys(state).forEach(k => Vue.delete(state, k))
//         }
//     },
//     actions: {
//         [USER_SIGNIN]({commit}, user) {
//             commit(USER_SIGNIN, user)
//         },
//         [USER_SIGNOUT]({commit}) {
//             commit(USER_SIGNOUT)
//         }
//     }
// }
