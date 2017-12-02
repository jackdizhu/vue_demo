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
		padding: .2rem;
		color: #fff;
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
		<div class="con">
			<v-index_list2></v-index_list2>
			<v-index_list3></v-index_list3>
		</div>
	</div>
</template>
<script>

  import { mapState,mapActions,mapMutations,mpaGetters } from 'vuex'

  import logo from './index_bg.jpg'

  export default {
		data() {
			return {
				logo
			}
		},
		computed: {
			// export default new Vuex.Store 中 使用 modules
			// ...mapState([{ user_me: state => state.user.user_me}])
			// export default new Vuex.Store({
									// state,
			// ...mapGetters([
            //      'show_user_id'
            //     ]),
			...mapState(['user'])
		},
		methods: {
            ...mapActions(['del_users_k2','del_users_k3'])
        }
  }

</script>
