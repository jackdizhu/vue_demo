<style lang="less" scoped>
	.btn {
		padding: 50px;
		text-align: center;
		button {
			padding: 5px 10px;
		}
	}
</style>
<template>
	<div>
		<v-header title="退出">
			<router-link slot="left" to="/home">返回</router-link>
		</v-header>
		<div class="btn">
			<button v-on:click="submit">确认退出</button>
		</div>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNOUT } from 'store/user.js'
    export default {
        methods: {
            // mapAction 函数 把我们的 action 直接映射到store 里面的action中
            ...mapActions([USER_SIGNOUT]),
            submit() {

                var _this = this;
                // 异步 发送 接收消息
                this.axios({
                    method:'post',
                    url:'http://127.0.0.1:3000/api/user_signout',
                    data: this.form,
                    responseType:'json'
                })
                .then(function(res) {
                    console.log(res);

                    _this[USER_SIGNOUT]()
                    _this.$router.replace({ path: '/login' })

                })
                .catch(function (err) {
                    if(err){
                        console.log(err + '获取数据失败');
                    }

                });

            }
        }
    }
</script>
