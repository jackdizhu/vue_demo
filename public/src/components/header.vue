<style lang="less" scoped>
	a {
		color: #333;
	}
	.header {
		position: relative;
		line-height: 1.4rem;
		color: #666;
		text-align: center;
		background: #eee;
		.item {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
		}
		.left {
			left: .2rem;
		}
		.right {
			right: .2rem;
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
