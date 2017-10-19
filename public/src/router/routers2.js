import App from '../app.vue'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/index3.vue'], resolve) // 09
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]
