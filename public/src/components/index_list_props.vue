<style lang="less" scoped>
	.list {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        bottom: 0;
        background: #333300;
	}
</style>
<template>
	<div class="list">
        <ul>
            <li v-for="use in uses">
                <div>
                    <p>
                        <span>{{use.name}}</span>
                    </p>
                </div>
            </li>
        </ul>
  	</div>
</template>
<script>
    
    import { mapState } from 'vuex'

    export default {
        props: {
            uses:{
                type: Array,
                default: () => {
                    return [
                            {
                                id: 'name_01',
                                name: '杰克帝主',
                            },
                            {
                                id: 'name_01',
                                name: '好友一号',
                            }
                        ];
                }
            }
        },
        computed: mapState({ uses: (state) => state.uses })
    }
</script>
