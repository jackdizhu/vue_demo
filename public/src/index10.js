import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router/routers2.js'
import store from './store/index2.js' // 不引入 user.js 写在同一个文件
import components from './components/index.js' //加载公共组件

import axios from 'axios'

// rem 计算
import './js/rem.js';


// import './css/base.css'
// import './less/common.less'

// 注册组件
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

// 使用路由
Vue.use(VueRouter)

// 将 axios 改写为 Vue 的原型属性
Vue.prototype.axios = axios

const router = new VueRouter({
    routes
})

// 每个路由进入前进行判断 全局钩子router.beforeEach
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})
// $mount 手动挂载到 DOM 节点
new Vue({ store, router }).$mount('#app')
