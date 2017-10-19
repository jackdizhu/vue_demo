<style lang="less" scoped>
	.login {
		padding: 1rem .2rem;
		text-align: center;
		.line {
			padding: .1rem;
			input {
				width: 8rem;
				padding: 0 .2rem;
				line-height: 1.2rem;
				border: 1px solid #eee;
			}
		}
		button {
			width: 8rem;
			padding: 0 .2rem;
			margin-top: .4rem;
			line-height: 1.2rem;
			border: 0;
			background: #eee;
			border-radius: .1rem;
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
				// mapAction 函数 把我们的 user.js 中 action 的方法 直接映射进来
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
