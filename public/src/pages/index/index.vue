<style lang="less" scoped>
	.login-msg {
		padding: 1rem .2rem;
		text-align: center;
	}
	.msg {
		padding: 1rem .2rem;
		text-align: center;
		font-size: .6rem;
		color: red;
	}
	.indexBtn{
		background: url("./logo.png") center center no-repeat;
	}
	.con{
		position: absolute;
		left: 0;
		right: 0;
		top: 1.4rem;
		bottom: 0;
	}
</style>
<template>
	<div>
		<v-header title="首页">
			<router-link slot="left" to="/" class="indexBtn">首页</router-link>
			<router-link slot="right" v-if="user.id" to="/signout">退出</router-link>
			<router-link slot="right" v-else to="/login">未登录,立即登录</router-link>
		</v-header>
		<div class="login-msg" v-if="!user.id">
			<div>
					index 首页
			</div>
		</div>
		<div class="msg" v-if="user.id">
			<div>
					<img width="50" :src="logo" alt=""> <br>
					Vue2 欢迎: {{user.name}}
			</div>
		</div>
	</div>
</template>
<script>

  import { mapState } from 'vuex'

	import logo from './index_bg.jpg'

  export default {
		data() {
			return {
				logo
			}
		},
    computed: mapState({ user: state => state.user }),
  }

</script>
