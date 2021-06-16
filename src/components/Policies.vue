<template>
    <div id="Policies">
        <div class="blank"></div>
        <div class="content">
            <div class="article">
                <div class="top_text">
                    <div class="left_title">
                        <h1>Communist Party of China's</h1>
                        <h1><img src="../assets/img/logo.png" alt="logo">important policy route</h1>
                    </div>
                    <div class="right_item">
                        <div class="date">
                            <div class="time">2021</div>
                            <div class="detail">Innovation</div>
                        </div>
                        <div class="border"></div>
                    </div>
                </div>
                <div class="bottom_text">
                    <p>{{info[items.num].description}}</p>
                    <img :src="info[items.num].img" alt="policy1">
                </div>
            </div>
            <div class="catalog">
                <div class="policy">
                    <h2 @click="changeInfo(0)">{{info[0].policy}}</h2>
                    <p>{{info[0].summary}}</p>
                </div>
                <div class="policy">
                    <h2 @click="changeInfo(1)">{{info[1].policy}}</h2>
                    <p>{{info[1].summary}}</p>
                </div>
                <div class="policy">
                    <h2 @click="changeInfo(2)">{{info[2].policy}}</h2>
                    <p>{{info[2].summary}}</p>
                </div>
                <div class="policy">
                    <h2 @click="changeInfo(3)">{{info[3].policy}}</h2>
                    <p>{{info[3].summary}}</p>
                </div>
            </div>
        </div>
        <div class="blank"></div>
    </div>
</template>

<script>
    export default {
        name: "Policies",
        data(){
            return {
                info:[
                    {
                        policy:'党在社会主义初级阶段的基本路线',
                        summary:'“一个中心、两个基本点”，是中国共产党在社会主义初级阶段基本路线的核心内容,一个中心，指以经济建设为中心；两个基本点，指坚持四项基本原则，坚持改革开放。',
                        description:'领导和团结全国各族人民,以经济建设为中心,坚持四项基本原则,坚持改革开放,\n' +
                            '自力更生,艰苦奋斗,为把我们建设成富强、民主、文明、和谐的社会主义现代化国家而奋\n' +
                            '斗.\n' +
                            '对这一基本路线的 简明概括是“一个中心,两个基本点。”即以经济建设为中心,坚\n' +
                            '持四项基本原则、坚持改革开放的总方针。\n' +
                            '“以经济建设为中心”,是社会主义的根本任务,体现了发展是生产力的本质要求;\n' +
                            '“坚持改革开放”,是社会主义发展的动力和外部条件,体现了解放生产力的本质要求;\n' +
                            '“坚持四项基本原则”,是解放和发展生产力的政治保证,体现了消灭剥削消除两极分\n' +
                            '化的基本要求;\n' +
                            '“一个中心,两个基本点”,是中国特色社会主义的发展规律,体现了最终达到共同富\n' +
                            '裕的本质要求.',
                        img:require('../assets/img/draw1.png'),
                    },
                    {
                        policy:'党在社会主义初级阶段的基本纲领',
                        summary:'是党在社会主义初级阶段的基本路线在经济、政治、文化、社会、生态文明等方面的展开，是建设有中国特色社会主义的基本目标和基本政策，即中国特色社会主义事业总体布局。',
                        description:'党的十二届六中全会确立了以经济建设为中心，坚定不移地进行经济体制改革，坚定不移地进行政治体制改革，坚定不移地进行精神文明建设的总体布局。'+
                            '十五大进一步明确提出了党的基本纲领，是党在社会主义初级阶段领导全国人民建设有中国特色社会主义的伟大行动纲领。这个纲领的提出，使我们党在社会主义初级阶段的基本目标更加清晰明确，基本政策更具规范性和稳定性。牢牢把握和全面实施党的基本纲领，对高举邓小平理论的伟大旗帜，坚持党的基本路线，夺取建设有中国特色社会主义事业的新胜利，具有十分重大的意义。',
                        img:require('../assets/img/draw2.png'),
                    },
                    {
                        policy:'中国共产党现阶段的方针政策',
                        summary:'是党在社会主义初级阶段的基本路线在经济、政治、文化、社会、生态文明等方面的展开，是建设有中国特色社会主义的基本目标和基本政策，即中国特色社会主义事业总体布局。',
                        description:'1、由原来的经济建设、政治建设、文化建设、社会建设“四位一体”，增加为经济建设、政治建设、文化建设、社会建设、生态文明建设“五位一体”。\n' +
                            '2、、全面建设小康社会目标的新要求：经济持续健康发展，人民民主不断扩大，文化软实力显著增强，人民生活水平全面提高，资源节约型、环境友好型社会建设取得重大进展。\n' +
                            '3、、全面深化经济体制改革。经济体制改革是全面深化改革的重点，核心问题是处理好政府和市场的关系，使市场在资源配置中起决定性作用和更好发挥政府作用。\n' +
                            '4、、全面准确贯彻“一国两制”、“港人治港”、“澳人治澳”、高度自治的方针。必须坚持“和平统一、一国两制”方针，巩固和深化两岸关系和平发展的政治、经济、文化、社会基础，开创两岸关系和平发展新前景。\n' +
                            '5、加强社会主义核心价值体系建设。社会主义核心价值体系是兴国之魂，决定着中国特色社会主义发展方向。倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观',
                        img:require('../assets/img/draw3.png'),
                    },
                    {
                        policy:'中国共产党的基本方略',
                        summary:'是党在社会主义初级阶段的基本路线在经济、政治、文化、社会、生态文明等方面的展开，是建设有中国特色社会主义的基本目标和基本政策，即中国特色社会主义事业总体布局。',
                        description:'坚持党对一切工作的领导。坚持以人民为中心。坚持全面深化改革。坚持新发展理念。坚持人民当家作主。坚持全面依法治国。坚持社会主义核心价值体系。坚持在发展中保障和改善民生。坚持人与自然和谐共生。坚持总体国家安全观。坚持党对人民军队的绝对领导。坚持“一国两制”和推进祖国统一。坚持推动构建人类命运共同体。坚持全面从严治党。\n'+
                        '习近平强调，实践没有止境，理论创新也没有止境。世界每时每刻都在发生变化，中国也每时每刻都在发生变化，我们必须在理论上跟上时代，不断认识规律，不断推进理论创新、实践创新、制度创新、文化创新以及其他各方面创新。',
                        img:require('../assets/img/draw4.png'),
                    },
                ],
                items:{
                    num:0,
                }
            }
        },
        methods:{
            changeInfo:function (number) {
                console.log(number);
                this.$set(this.items,"num",number);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
    #Policies{
        position: absolute;
        top: 100vh;
        left: 0;
        height: 100vh;
        width: 100%;
        .blank{
            height: 10vh;
            width: 100%;
        }
        .content{
            height: 80vh;
            width: 100%;
            display: flex;
            flex-direction: row;
            .article{
                height: 100%;
                width: 75%;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                display: none;
                @include MQ(L){
                    display: flex;
                }
                .top_text{
                    width: 90%;
                    height: 30%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    .left_title{
                        width: 75%;
                        height: 100%;
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-around;
                        flex-direction: column;
                        h1{
                            margin: auto 0;
                            line-height: 64px;
                            font-family: 'Baloo', sans-serif;
                            font-size: 42px;
                            img{
                                height: 48px;
                                width: auto;
                                margin: auto 0;
                            }
                        }
                    }
                    .right_item{
                        height: 100%;
                        width: 25%;
                        position: relative;
                        .border{
                            width: 5px;
                            height: 60%;
                            background-color: #E12927;
                            position: absolute;
                            right: 0;
                            top: 0;
                            border-radius: 15px;
                        }
                        .date{
                            position: absolute;
                            right: 10px;
                            width: 80%;
                            height: 60%;
                            text-align: right;
                            .time{
                                color: #E12927;
                                font-family: 'Baloo',sans-serif;
                                font-size: 20px;

                            }
                            .detail{
                                font-size: 25px;
                                font-family: 'STHeiti',sans-serif;
                                font-weight: 800;
                            }
                        }
                    }
                }
                .bottom_text{
                    width: 90%;
                    height: 70%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    flex-direction: row;
                    p{
                        margin-left: 5%;
                        width: 60%;
                        font-family: 'Microsoft Yahei',sans-serif;
                        font-weight: 600;
                        line-height: 32px;
                    }
                    img{
                        display: block;
                        width: auto;
                        height: 100%;
                    }
                }
            }
            .catalog{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
                width: 80%;
                margin: 0 auto !important;
                @include MQ(L){
                    width: 25%;
                }
                .policy{
                    width: 80%;
                    height: 20%;
                    h2{
                        cursor: pointer;
                        color: #303E49;
                        font-size: 20px;
                        font-weight: 600;
                        font-family: 'STHeiti',sans-serif;
                    }
                    p{
                        box-sizing: border-box;
                        padding: 1em 2em 0 0;
                        font-size: 12px;
                        font-family: 'Baloo', sans-serif;
                        font-weight: 100;
                        color: #E12927;
                    }
                }
            }
        }
    }
</style>