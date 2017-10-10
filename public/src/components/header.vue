<style lang="less" scoped>
	.header {
		position: relative;
		line-height: 38px;
		color: #666;
		text-align: center;
		background: #eee;
		.item {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
			a {
				color: #333;
			}
		}
		.left {
			left: 10px;
		}
		.right {
			right: 10px;
		}
	}
</style>
<template>
	<header class="header">
		<div class="item left">
			<slot name="left"></slot>
		</div>
		<div class="title">{{title}}</div>
		<div class="item right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
