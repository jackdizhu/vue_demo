import Vue from './js/vue.min.js';
import VueRouter from './js/vue-router.min.js';

import App from './html/app.vue';

import Home from './html/demo01.vue';
import Foo from './html/demo02.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname, //这个很重要
    routes
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
