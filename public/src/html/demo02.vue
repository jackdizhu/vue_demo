<template>
    <div id="demo02">
        <div v-for="n in 10">div02</div>
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
    #demo02{
        background: #eee;
    }
</style>
