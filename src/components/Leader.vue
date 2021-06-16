<template>
    <div id="leader">
        <div class="img"><img :src="info[number].url" alt="XiJinPing"></div>
        <div class="name">{{info[number].name}}</div>
        <div class="contribute">{{info[number].contribute}}</div>
        <button @click="InfoChange(number)">about</button>
    </div>
</template>

<script>
    export default {
        name: "leader",
        props:{
            number:{

            }
        },
        data(){
            return {
                info:[
                    {
                        url:require('../assets/img/MaoZeDong.png'),
                        name:"毛泽东",
                        contribute:"毛泽东思想"
                    },
                    {
                        url:require('../assets/img/DengXiaoPing.png'),
                        name:'邓小平',
                        contribute:"邓小平理论"
                    },
                    {
                        url:require('../assets/img/JiangZeMin.png'),
                        name:'江泽民',
                        contribute:"'三个代表'重要思想"
                    },
                    {
                        url:require('../assets/img/HuJinTao.png'),
                        name:'胡锦涛',
                        contribute:'科学发展观'
                    },
                    {
                        url:require('../assets/img/XiJinPing.png'),
                        name:'习近平',
                        contribute:'习近平新时代中国特色社会主义思想'
                    }
                ]
            }
        },
        methods:{
            InfoChange:function () {
                this.$emit('getInfo',this.number);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
    #leader{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'FZYaoti', sans-serif;
        @include MQ(M){
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .img{
            img{
                width: 100%;
                min-height: 100%;
            }
            max-width: 250px;
            max-height: 250px;
            height: auto;
            overflow: hidden;
            border-radius: 50%;
            background-color: #e12927;
            margin-top: -10px 0 0 0;
            @include MQ(M){
                width: 100px;
                height: 100px;
            }
            @include MQ(L){
                width: 200px;
                height: 200px;
            }
        }
        div{
            &.name{
                font-weight: 700;
            }
            &.contribute{
                font-size: 11px;
                @include MQ(M){
                    font-size: 13px;
                }
                @include MQ(L){
                    font-size: 15px;
                }
            }
            margin: 5px 0 ;
        }
        button{
            display: none;
            @include MQ(L){
                display: inline-block;
                outline: none;
                cursor: pointer;
                background-color: transparent;
                color: #e12927;
                font-weight: 800;
                font-family: inherit;
                border: 2px solid #e12927;
                border-radius: 30px;
                width: 80px;
                height: 30px;
                font-size: 15px;
            }
        }
    }
</style>