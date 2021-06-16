<template>
    <div class="index" id="Index">
        <img src="../assets/img/highLight1.png" id="highLight1" alt="highLight1" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/highLight2.png" id="highLight2" alt="highLight2" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/Ink.png" alt="Ink" id="Ink" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/bird.png" alt="bird" id="bird" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/GoldLeaf1.png" alt="GoldLeaf1" id="GoldLeaf1" class="GoldLeaf" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/GoldLeaf2.png" alt="GoldLeaf2" id="GoldLeaf2" class="GoldLeaf" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/GoldLeaf3.png" alt="GoldLeaf3" id="GoldLeaf3" class="GoldLeaf" :style="{width: screenWidth+'px'}">
        <img src="../assets/img/Tower.png" alt="Tower" id="Tower">
        <div class="box box-left">
            <img src="../assets/img/left_top.png" :style="{opacity:rat_op}" class="img_left imgs" alt="left_top">
            <img src="../assets/img/left_bottom.png" :style="{opacity:rat_op}" class="img_left imgs" alt="left_bottom">
        </div>
        <div class="box box-mid">
            <img src="../assets/img/number.png" alt="number">
            <img src="../assets/img/title.png" alt="title">
        </div>
        <div class="box box-right">
            <img src="../assets/img/right_top.png" :style="{opacity:rat_op}" class="img_right imgs" alt="right_top">
            <img src="../assets/img/right_bottom.png" :style="{opacity:rat_op}" class="img_right imgs" alt="right_bottom">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        methods:{
            GetSW() {
                this.$emit('getSW',this.screenWidth);
            }
        },
        data () {
            return {
                maxWidth:0,
                rat_op:1,
                screenWidth: document.body.clientWidth
            }
        },
        mounted () {
            this.maxWidth = window.innerWidth;
            const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth;
                    this.rat_op = ((this.screenWidth/this.maxWidth)-0.3);
                    this.GetSW();
                })()
            }
        },

        watch: {
            screenWidth (val) {
                this.screenWidth = val;
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .index{
        background-color: white;
        width: 100%;
        height: 100vh !important;
        position: relative;
        #highLight1{
            display: block;
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;
        }
        #highLight2{
            position: absolute;
            height: auto;
            bottom: 0;
            right: 0;
        }
        #Ink{
            height: 100%;
            position: absolute;

        }
        #bird{
            height: 100%;
            position: absolute;
            bottom: 0;
        }
        .GoldLeaf{
            position: absolute;
        }
        #GoldLeaf1{
            top: 0;
            left: 0;
        }
        #GoldLeaf2{
            bottom: 0;
            right: 0;
        }
        #GoldLeaf3{
            bottom: 0;
            left: 0;
        }
        #Tower{
            position: absolute;
            left:50%;
            bottom: 0;
            transform: translateX(-50%);
        }
        .box{
            position: absolute;
            width: 500px;
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 100%;
                height: auto;
            }
            .imgs{
                margin: 10px 0;
                transition: 0.4s;
            }
        }
        .box-left{
            left: 0;
            top: 0;
        }
        .box-mid{
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        .box-right{
            right: 0;
            top: 0;
        }
    }

</style>