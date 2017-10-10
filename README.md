
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
  }

更改启动方式 开发环境 npm run dev  正式环境 npm run env

https://github.com/jackdizhu/vue_demo

https://jackdizhu.github.io/vue_demo/
