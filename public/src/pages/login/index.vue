<style lang="less" scoped>
	.login {
		padding: 50px;
		text-align: center;
		.line {
			padding: 5px;
			input {
				padding: 0 10px;
				line-height: 28px;
			}
		}
		button {
			padding: 0 20px;
			margin-top: 20px;
			line-height: 28px;
		}
	}
</style>
<template>
	<div>
		<v-header title="登录">
			<router-link slot="left" to="/">返回</router-link>
		</v-header>
		<form class="login" v-on:submit.prevent="submit">
			<div class="line">
				<div v-show="btn && !form.id">账号不能为空</div>
				<input type="number" placeholder="输入你的账号" v-model="form.id">
			</div>
			<div class="line">
				<div v-show="btn && !form.name">用户名不能为空</div>
				<input type="text" placeholder="输入你的用户名" v-model="form.name">
			</div>
			<button>登录</button>
		</form>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/user.js'

    export default {
        data() {
					return {
						btn: false, //true 已经提交过， false没有提交过
						form: {
							id: '',
							name: ''
						}
					}
				},
				methods: {
						// mapAction 函数 把我们的 action 直接映射到store 里面的action中
            ...mapActions([USER_SIGNIN]),
						submit() {

								if(this.btn || !this.form.id || !this.form.name) return

								this.btn = true

								var _this = this;
								// 异步 发送 接收消息
                this.axios({
                    method:'post',
                    url:'http://127.0.0.1:3000/api/user_signin',
                    data: this.form,
                    responseType:'json'
                })
                .then(function(res) {
                    console.log(res);

                    _this[USER_SIGNIN](_this.form)
										_this.$router.replace({ path: '/' })

                		_this.btn = false;
                })
                .catch(function (err) {
                		if(err){
		                    console.log(err + '获取数据失败');
                		}

                		_this.btn = false;
                });

						}
				}
    }
</script>
