<template>
    <div id="Footer">
        <img src="../assets/img/footer.png" alt="footer">
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return {
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
    #Footer{
        position: absolute;
        z-index: 6;
        top: 600vh;
        left: 0;
        min-height: 10vh;
        width: 100%;
        @include MQ(M){
            height: 10vh;
        }
        @include MQ(L){
            height: 50vh;
            top: 600vh;
        }
        img{
            width: 100%;
            height: auto;
            bottom: 0;
            left: 0;
            position: absolute;
        }
    }
</style>