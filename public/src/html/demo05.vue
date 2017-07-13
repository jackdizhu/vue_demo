<template>
    <div id="demo04">
        <div v-for="n in 10">div02</div>
        <img src="../img/folder_bg.png"/>
        <img src="../img/index_bg.jpg"/>
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
    @import '../css/page/demo04.css';
</style>
