<style lang="less" scoped>
	.list {
        position: absolute;
        left: 0;
        top: 0;
        width: 100px;
        bottom: 0;
        background: #333300;
       
        a{
            float: right;
            color: #fff;
            padding: 0 .1rem;
        }
	}
</style>
<template>
	<div class="list">
        <ul>
            <li v-for="(use,index) in users2">
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
			...mapState(['users2'])
		},
        methods: {
            ...mapActions(['del_users_k'])
        }
    }
</script>
