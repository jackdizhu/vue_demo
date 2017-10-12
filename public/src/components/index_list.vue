<style lang="less" scoped>
	.list {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        bottom: 0;
        background: #333300;
       
        a{
            float: right;
            color: #fff;
            padding: 0 3px;
        }
	}
</style>
<template>
	<div class="list">
        <ul>
            <li v-for="(use,index) in users">
                <div>
                    <p>
                        <span>{{use.name}}</span>
                        <a href="javascript:;" @click="del_users_k(index)">删除</a>
                    </p>
                </div>
            </li>
        </ul>
  	</div>
</template>
<script>
    
    import { mapState,mapActions,mapMutations } from 'vuex'

    export default {
        data: () => {
            // var data = {users: [
            //             {
            //                 id: 'name_01',
            //                 name: '杰克帝主',
            //             },
            //             {
            //                 id: 'name_01',
            //                 name: '好友一号',
            //             }
            //         ]
            //     };
            return {};
        },
        computed: {
			...mapState(['users'])
		},
        methods: {
            ...mapActions(['del_users_k'])
        }
    }
</script>
