<template>
    <div id="demo01">
        <div v-for="n in 10">div</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    #demo01{
        background: #eee;
    }
</style>
