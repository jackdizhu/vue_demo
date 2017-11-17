
vue_demo ^2.3.4

gulp(^3.9.0) + webpack(^3.0)

[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    (found in <Root>)
如果我们想使用template，我们不能直接在客户端使用npm install之后的vue

VueRouter 没有渲染问题  需要调用 Vue.use(VueRouter); 方法

报错webpack cannot resolve ... (vue设置 别名路径 通过path.resolve 方法 生成绝对路径)
  resolve: {
      alias: {
          vue: path.resolve(__dirname,_path + 'dist/js/vue/vue.js'), //webpack打包时，需要设置别名
          store: '../../store' //设置别名
      }

webpack ^3 暂不支持 css 拆分插件

[Vue warn]: Invalid default value for prop "names": Props with type Object/Array must use a factory function to return the default value.
Props 是 Object 或者 Array 需要用匿名函数返回

vuex 组件之间 通过computed 共享状态
通过 Vue.delete 删除数据

vue 2.0
新数组语法 
value in arr 
(value, index) in arr

新对象语法 
(value, key, index) in obj

大型单页应用注意问题

  例如，第一次打开时，显示页面 A，页面 A 有一个setInterval事件，每隔一秒钟会向后台发送一个Ajax请求。这时我点击页面 A 上的跳转按钮，跳到页面 B，通过观察网络连接，发现页面 A 上的Ajax请求仍然在继续。

  解决方案: 在离开该组件时，比如route的deactivate或者beforeDestory生命周期函数里手动clearInterval

更改启动方式 开发环境 npm run dev  正式环境 npm run env

https://github.com/jackdizhu/vue_demo

https://jackdizhu.github.io/vue_demo/


