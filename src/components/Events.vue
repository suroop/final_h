<template>
    <div id="Events">
        <div class="selection">
            <div class="intro">
                <p><svg t="1623248711973" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3082" width="32" height="32"><path d="M832 64a128 128 0 0 1 128 128v704a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V192a128 128 0 0 1 128-128v83.2a44.8 44.8 0 0 0-44.416 38.72L147.2 192v704a44.8 44.8 0 0 0 38.72 44.416L192 940.8h640a44.8 44.8 0 0 0 44.416-38.72L876.8 896V192a44.8 44.8 0 0 0-38.72-44.416L832 147.2V64z m-192 83.2H384V64h256v83.2z" p-id="3083" fill="#d81e06"></path><path d="M256 0m41.6 0l0 0q41.6 0 41.6 41.6l0 108.8q0 41.6-41.6 41.6l0 0q-41.6 0-41.6-41.6l0-108.8q0-41.6 41.6-41.6Z" p-id="3084" fill="#d81e06"></path><path d="M704 0m41.6 0l0 0q41.6 0 41.6 41.6l0 108.8q0 41.6-41.6 41.6l0 0q-41.6 0-41.6-41.6l0-108.8q0-41.6 41.6-41.6Z" p-id="3085" fill="#d81e06"></path><path d="M256 320m41.6 0l236.8 0q41.6 0 41.6 41.6l0 0q0 41.6-41.6 41.6l-236.8 0q-41.6 0-41.6-41.6l0 0q0-41.6 41.6-41.6Z" p-id="3086" fill="#d81e06"></path><path d="M256 512m41.6 0l428.8 0q41.6 0 41.6 41.6l0 0q0 41.6-41.6 41.6l-428.8 0q-41.6 0-41.6-41.6l0 0q0-41.6 41.6-41.6Z" p-id="3087" fill="#d81e06"></path><path d="M256 704m41.6 0l172.8 0q41.6 0 41.6 41.6l0 0q0 41.6-41.6 41.6l-172.8 0q-41.6 0-41.6-41.6l0 0q0-41.6 41.6-41.6Z" p-id="3088" fill="#d81e06"></path></svg></p>
                <p>Major Party</p>
                <p>Event</p>
            </div>
            <div class="select">
                <p>What are the party's history and major events</p>
                <p>Memorabilia of the Chinese Communist Party</p>
                <ul>
                    <li>
                        <button @click="shiftInfo(0)">{{info[0].event}}</button>
                    </li>
                    <li>
                        <button @click="shiftInfo(1)">{{info[1].event}}</button>
                    </li>
                    <li>
                        <button @click="shiftInfo(2)">{{info[2].event}}</button>
                    </li>
                    <li>
                        <button @click="shiftInfo(3)">{{info[3].event}}</button>
                    </li>
                    <li>
                        <button  @click="shiftInfo(4)">{{info[4].event}}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="involved">
            <div class="left-col col">
                <div class="part1 part">
                    <h3>{{info[items.num].secondary}}</h3>
                    <h1>{{info[items.num].event}}</h1>
                </div>
                <div class="part2 part">{{info[items.num].description}}</div>
                <div class="part3 part">
                    <p><span >{{info[items.num].time}}</span><span>{{info[items.num].main}}</span></p>
                </div>
            </div>
            <div class="right-col col">
<!--                <video width="320" height="240">-->
<!--                    <source src="../assets/video/home2.mp4" type="video/mp4">-->
<!--                </video>-->
                <video-player
                        class="video-player vjs-custom-skin video"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        data(){
            return {
                info:[
                    {
                        event:'南昌起义',
                        description:'八一南昌起义常简称南昌起义或者八一起义，指在1927年8月1日中共联合国民党左派，打响了武装反抗国民党反动派的第一枪，揭开了中国共产党独立领导武装斗争和创建革命军队的序幕。\n'+
                        '1927年8月1日，中国共产党领导部分国民革命军在江西省南昌市举行的武装起义。\n'+
                        '起义由周恩来、贺龙、李立三、叶挺、朱德、刘伯承、谭平山领导。',
                        time:'1927年8月1日',
                        secondary:'打响了武装反抗国民党反动统治的第一枪',
                        main:'周恩来'
                    },
                    {
                        event:'秋收起义',
                        description:'秋收起义是毛泽东在湖南东部和江西西部领导的工农革命军举行的一次武装起义，1927年9月9日，秋收起义部队在文家市会师，是继南昌起义之后又一次著名的武装起义。\n'+
                        '秋收起义是中国共产党第一次在武装斗争中公开打出了自己的旗号，人民军队历史上第一面军旗（带有镰刀、斧头、五角星的工农革命军军旗）的诞生，在全国人民面前彰显了中国共产党独立领导革命战争的决心。',
                        time:'1927年9月9日',
                        secondary: '第一次在武装斗争中公开打出了自己的旗号',
                        main:'毛泽东'
                    },
                    {
                        event:'遵义会议',
                        description:'是在红军第五次反“围剿”失败和长征初期严重受挫的情况下，为了纠正博古、王明、李德等人“左”倾领导在军事指挥上的错误而召开的。这次会议是中国共产党第一次独立自主地运用马克思列宁主义基本原理解决问题的路线、方针政策的会议。这次会议开始确立实际以毛泽东为代表的马克思主义的正确路线在中共中央的领导地位，挽救了党、挽救了中国革命，是中国共产党历史上一个生死攸关的转折点。',
                        time:'1935年1月15日~17日',
                        secondary: '中国共产党历史上的一个生死攸关的转折点。',
                        main:'毛泽东'
                    },

                    {
                        event:'新中国成立',
                        description:'1949年10月1日下午3时，北京30万群众齐集天安门广场，举行隆重的开国大典。毛泽东主席在天安门城楼上向全世界庄严宣告：“中华人民共和国中央人民政府今天成立了！”向世界宣告中华人民共和国中央人民政府成立。新中国的成立，开辟了中国历史的新纪元，从此，中国结束了一百多年来被侵略被奴役的屈辱历史，真正成为了独立自主的国家，中国人民从此站起来了，成为国家的主人。',
                        time:'1949年10月1日',
                        secondary: '人民当家做主,中国人民共和国成立',
                        main:'毛泽东'
                    },
                    {
                        event:'十一届三中全会',
                        description:'党的十一届三中全会开启了改革开放历史新时期，党的十七大报告是在回顾总结新时期29年来改革开放伟大历史进程时，开宗明义地作出这样一个蕴涵广阔历史背景和深刻思想内容的精辟概括的。第一，重新确立了党的马克思主义的思想路线。第二，重新确立了马克思主义的政治路线。第三，重新确立了党的正确的组织路线。',
                        time:'1978年12月18日~22日',
                        secondary: '新时代,新纪元,改革开放',
                        main:'邓小平'
                    }
                ],
                items:{
                    num:0
                },
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",// 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: require("../assets/video/home2.mp4") // url地址
                    }],
                    poster: require("../assets/img/Cover.jpg"), // 你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  // 全屏按钮
                    }
                }
            }
        },
        methods:{
            shiftInfo:function (num) {
                this.$set(this.items,'num',num);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
    #Events{
        position: absolute;
        top: 200vh;
        left: 0;
        height: 100vh;
        width: 100%;
        .selection{
            position: absolute;
            left: 50%;
            top: 10%;
            transform: translateX(-50%);
            width: 60%;
            height: 100px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0,0.1),
                        0 4px 8px rgba(0, 0, 0,0.1),
                        0 8px 16px rgba(0, 0, 0,0.1),
                        0 16px 32px rgba(0, 0, 0,0.1);

            flex-direction: row;
            align-items: center;
            justify-content: center;
            display: none;
            @include MQ(L){
                display: flex;
            }
            .intro{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 20%;
                height: 100%;
                p{
                    text-align: center;
                    font-family: 'ThinItalic',sans-serif;
                    font-weight: 800;
                    font-size: 20px;
                }
            }
            .select{
                height: 80%;
                width: 80%;
                box-sizing: border-box;
                border-left: 1px solid #E12927;
                p{

                    text-align: center;
                }
                p:first-of-type{
                    font-size: 20px;
                    font-weight: 700;
                }
                p:last-of-type{
                    font-size: 10px;
                    font-weight: 300;
                }
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    li{
                        button{
                            cursor: pointer;
                            border: none;
                            outline: none;
                            height: 40px;
                            width: 120px;
                            margin:0 3px ;
                            border-radius: 5px;
                            background-color: #EEF2F3;
                            transition: 0.4s;
                            font-weight: 800;
                            color: black;
                            font-size: 15px;
                            font-family: 'ThinItalic',sans-serif;
                            &:hover{
                                background-color: #E12927;
                                color: white;
                            }
                        }
                    }
                }
            }
        }
        .involved{
            width: 80%;
            margin:{
                top:64px;
                left: auto;
                right: auto;
            };
            height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @include MQ(M){
                height: 75vh;
                margin:{
                    top:200px;
                    left: auto;
                    right: auto;
                };
            }
            @include MQ(L){
                flex-direction: row;
                height: 70vh;
            }
            .col{
                height: 100%;
                @include MQ(M){
                    height: 100%;
                }
                @include MQ(L){
                    height: 45%;
                }
            }
            .left-col{
                width: 100%;
                @include MQ(M){
                    width: 100%;
                    height: 100%;
                }
                @include MQ(L){
                    width: 40%;
                    height: 100%;
                }
                .part{
                    margin: 2em 0;
                    h3{
                        font-size: 20px;
                    }
                }
                .part2{
                    width: 100%;
                    height: auto;
                    box-sizing: border-box;
                    border-left: 3px solid #e12927;
                    font-size: 15px;
                    font-family: 'FZYaoti', sans-serif;
                    line-height: 1;
                    padding:0 1em 0 10% ;
                    @include MQ(M){
                        line-height: 1.4;
                        font-size: 25px;
                    }
                    @include MQ(L){
                        line-height: 1.6;
                        font-size: 18px;
                        min-height: 200px;
                    }
                }
                .part3{
                    font-family: 'STXingkai', sans-serif;
                    text-align: center;
                    span{
                        &:first-child{
                            font-size: 30px;
                            margin: 0 15% 0 0 ;
                        }
                        &:last-child{
                            font-size: 25px;
                            margin: 0 30px;
                        }

                    }
                    display: none;
                    @include MQ(M){
                        display: block;
                    }
                    @include MQ(L){
                        display: block;
                    }
                }
            }
            .right-col{
                width: 100%;
                .video{
                    height: auto;
                    width: 100%;
                    outline: none;
                    @include MQ(L){
                        height: 100% !important;
                        width: 100%;
                    }
                }
                @include MQ(M){
                    display: none;
                }
                @include MQ(L){
                    display: block;
                    width: 60%;
                    height: 100%;
                }
            }
        }
    }
</style>